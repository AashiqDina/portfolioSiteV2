import { createContext, useContext, useEffect, useState } from "react";
import { themes } from "../styles/theme";

type ThemeName = keyof typeof themes;

type ThemeContextType = {
  themeName: ThemeName;
  theme: (typeof themes)[ThemeName];
  setTheme: (name: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const saved = localStorage.getItem("theme") as ThemeName | null;
    return saved ?? "default";
  });

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  const value = {
    themeName,
    theme: themes[themeName],
    setTheme: setThemeName,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}