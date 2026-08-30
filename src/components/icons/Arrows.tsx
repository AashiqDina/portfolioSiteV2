import { useTheme } from "../../context/ThemeContext";
import { themeColourSchemes } from "../../styles/themeColourScheme";

export function LeftArrow() {
  const { themeName } = useTheme();
  const colourScheme = themeColourSchemes[themeName];

  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <polygon
        points="10,25 45,5 45,45"
        fill="none"
        stroke={colourScheme.MainColour}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RightArrow() {
  const { themeName } = useTheme();
  const colourScheme = themeColourSchemes[themeName];

  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <polygon
        points="5,5 5,45 40,25"
        fill="none"
        stroke={colourScheme.MainColour}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
