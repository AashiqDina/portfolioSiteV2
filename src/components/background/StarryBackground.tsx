import { useMemo } from "react";
import "./StarryBackground.css";
import { useTheme } from "../../context/ThemeContext";
import Stars from "./Stars";

export default function StarryBackground() {
  const { theme } = useTheme();
  return (
    <div className="stars-container" style={theme.background}>
      <Stars count={90} styles={theme.stars} />
    </div>
  );
}
