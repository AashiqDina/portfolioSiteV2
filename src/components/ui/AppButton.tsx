import { Children, CSSProperties, ReactNode } from "react";
import "./AppButton.css";
import { useTheme } from "../../context/ThemeContext";

type Props = {
  children: ReactNode;
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
  textStyle,
}: Props) {
  const { theme } = useTheme();

  return (
    <button
      className={className || "defaultButton"}
      onClick={onPress}
      style={{ ...theme.primaryButton, ...style }}
    >
      {leftIcon}
      <p
        className={textClassName || "defaultButtonText"}
        style={{ ...theme.primaryText, ...textStyle }}
      >
        {children}
      </p>
      {rightIcon}
    </button>
  );
}
