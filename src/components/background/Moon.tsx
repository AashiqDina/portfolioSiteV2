import { useTheme } from "../../context/ThemeContext";
import "./Moon.css";

export default function Moon() {
  const { theme } = useTheme();
  console.log(theme.moon);
  return <div style={theme.moon} className="OuterMoon"></div>;
}
