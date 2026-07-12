import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

type props = {
  title: string;
};

export default function PageTitle({ title }: props) {
  const { theme } = useTheme();
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    setAnimateTitle(true);
  }, []);

  return (
    <h1 style={theme.text} className="header1">
      {title.split("").map((char, index) => {
        return (
          <span
            key={index}
            className={`character ${animateTitle ? "show" : ""}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </h1>
  );
}
