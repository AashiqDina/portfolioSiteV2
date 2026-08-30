import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createTheme, Theme } from "../styles/theme";
import { ThemeName, themeColourSchemes } from "../styles/themeColourScheme";

type ThemeContextType = {
  themeName: ThemeName;
  theme: Theme;
  setTheme: (name: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "default" || saved === "light" || saved === "dark") {
      return saved;
    }

    return "default";
  });

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  const theme = useMemo(() => {
    return createTheme(themeColourSchemes[themeName]);
  }, [themeName]);

  const value = {
    themeName,
    theme,
    setTheme: setThemeName,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return ctx;
}
