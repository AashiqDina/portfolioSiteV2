import { CSSProperties } from "react";
import "./AppLink.css";
import { useTheme } from "../../context/ThemeContext";

type Props = {
  children: string;
  style?: CSSProperties;
};

export default function AppLink({ children, style }: Props) {
  const { theme } = useTheme();

  return (
    <button
      className="AppLink"
      style={{
        "--hover-background": theme.textHoverAnimation.background,
        ...theme.text,
        ...style,
      }}
    >
      {children}
    </button>
  );
}
