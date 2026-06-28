import { CSSProperties, ReactNode } from "react";
import "./AppButton.css"

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
    return (
        <button 
            className={className || "defaultButton"}
            onClick={onPress}
            style={style}
            >
                {leftIcon}
                <p className={textClassName || "defaultButtonText"} style={textStyle}>{text}</p>
                {rightIcon}
        </button>
    )
}