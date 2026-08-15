import { Children, CSSProperties, ReactNode } from "react";
import "./AppButton.css";
import { useTheme } from "../../context/ThemeContext";

type Props = {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onPress?: () => void;
  className?: string;
  textClassName?: string;
  style?: CSSProperties;
  textStyle?: CSSProperties;
};

export default function AppButton({
  children,
  leftIcon,
  rightIcon,
  onPress,
  className,
  textClassName,
  style,
}: Props) {
  const { theme } = useTheme();

  return (
    <button
      className={className || "defaultButton"}
      onClick={onPress}
      style={{ ...theme.primaryButton, ...style }}
    >
      {leftIcon}
      <p className={textClassName || "defaultButtonText"}>{children}</p>
      {rightIcon}
    </button>
  );
}
