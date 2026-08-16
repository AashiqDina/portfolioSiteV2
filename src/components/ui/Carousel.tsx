import { useTheme } from "../../context/ThemeContext";
import "./Carousel.css";

export type PillItem = {
  id: string;
  label: string;
};

type CarouselProps = {
  items: PillItem[];
};

export function Carousel({ items }: CarouselProps) {
  const { theme } = useTheme();

  return (
    <div className="carousel-container">
      <div className="carousel-card-container">
        {items.map((item) => (
          <span
            key={`${item.id}`}
            style={{ ...theme.text, ...theme.pill }}
            className="carousel-rider"
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
