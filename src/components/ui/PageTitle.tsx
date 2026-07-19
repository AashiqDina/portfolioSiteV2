import { useState, useEffect, ElementType } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./PageTitle.css";

type Props = {
  title: string;
  as?: ElementType;
  className?: string;
  delaySpeed?: number;
  style?: StyleSheet;
  addShadow?: boolean;
};

export default function PageTitle({
  title,
  as: Component = "h2",
  className = "",
  style,
  delaySpeed = 1,
  addShadow = false,
}: Props) {
  const [animateTitle, setAnimateTitle] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setAnimateTitle(true);
  }, []);

  return (
    <section className="ProjectsTitleSection">
      <Component className={className} style={style ? style : theme.text}>
        {title.split("").map((char, index) => (
          <span
            key={index}
            className={`character ${animateTitle ? "show" : ""}`}
            style={{
              transitionDelay: `${index * delaySpeed * 0.1}s`,
              ...(addShadow
                ? { textShadow: `0rem 0rem 0.25rem ${theme.text.color}` }
                : undefined),
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </Component>
    </section>
  );
}
