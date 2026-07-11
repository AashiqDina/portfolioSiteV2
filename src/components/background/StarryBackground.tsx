import { useMemo } from "react";
import "./StarryBackground.css";
import { useTheme } from "../../context/ThemeContext";

export default function StarryBackground() {
  const { theme } = useTheme();

  const stars = useMemo(
    () =>
      Array.from({ length: 100 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
      })),
    [],
  );

  return (
    <div className="stars-container" style={theme.background}>
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            ...theme.stars,
          }}
        />
      ))}
    </div>
  );
}
