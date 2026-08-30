import { CSSProperties } from "react";
import { ThemeColourScheme } from "./themeColourScheme";

export function createTypography(theme: ThemeColourScheme) {
  const text: CSSProperties = {
    color: theme.MainColour,
    fontFamily: "Sansation, sans-serif",
    margin: 0,
    padding: 0,
    transition: "all 0.5s ease-in-out",
  };

  return {
    text,
  };
}
