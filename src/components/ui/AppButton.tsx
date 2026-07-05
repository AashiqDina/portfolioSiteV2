import { CSSProperties, ReactNode } from "react";
import "./AppButton.css"
import { useTheme } from "../../context/ThemeContext";

type props = {
    text: string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    onPress?: () => void,
    className?: string,
    textClassName?: string,
    style?: CSSProperties,
    textStyle?: CSSProperties
}

export default function AppButton({
    text,
    leftIcon,
    rightIcon,
    onPress,
    className,
    textClassName,
    style,
    textStyle,
}: props){
    const { theme } = useTheme()

    return (
        <button 
            className={className || "defaultButton"}
            onClick={onPress}
            style={{...theme.primaryButton, ...style}}
            >
                {leftIcon}
                <p className={textClassName || "defaultButtonText"} style={{...theme.primaryText, ...textStyle}}>{text}</p>
                {rightIcon}
        </button>
    )
}