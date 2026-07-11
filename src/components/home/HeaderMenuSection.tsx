import { useEffect, useMemo, useRef, useState } from "react";
import { headerPagesData } from "../../types";
import "./HeaderMenuSection.css";
import { useTheme } from "../../context/ThemeContext";
import { addAlpha } from "../../styles/colours";
import getPagesData from "../../data/getPagesData";

function formatData(data: headerPagesData[]): headerPagesData[][] {
  const formattedData: headerPagesData[][] = [];

  for (let i = 0; i < data.length; i += 3) {
    formattedData.push(data.slice(i, i + 3));
  }

  return formattedData;
}

export default function HeaderMenuSections() {
  const { theme } = useTheme();
  const [data, setData] = useState<headerPagesData[][]>([]);

  useEffect(() => {
    const pagesData = getPagesData(theme);
    const formattedData = formatData(pagesData);
    setData(formattedData);
  }, []);

  return (
    <div className="HeaderMenuSectionsContainer">
      {data.map((formattedData, index) => {
        return (
          <div
            className={
              index % 2
                ? `HeaderMenuSectionLayout One`
                : `HeaderMenuSectionLayout Two`
            }
            key={`${index}-${formattedData[index].title}`}
          >
            {formattedData.map((data, childIndex) => {
              return (
                <QuickSectionBox
                  data={data}
                  parentIndex={index}
                  childIndex={childIndex}
                  key={`${data.title}-${childIndex}`}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

type QuickSectionBoxProps = {
  data: headerPagesData;
  parentIndex: number;
  childIndex: number;
};

function QuickSectionBox({
  data,
  parentIndex,
  childIndex,
}: QuickSectionBoxProps) {
  const { theme } = useTheme();
  const type = parentIndex % 2 === 0 ? 1 : 2;
  const cardRef = useRef<HTMLDivElement>(null);

  const purpleStars = useMemo(
    () =>
      Array.from({ length: 10 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
      })),
    [],
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    cardRef.current.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`,
    );
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    cardRef.current.style.setProperty(
      "--hover-colour",
      `${addAlpha(data.borderHoverColour, 50)}`,
    );
  }

  return (
    <div
      className={`HeaderMenuSectionBox child${childIndex + 1} type${type}`}
      style={theme.headerNavButtons}
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <h3 style={theme.text}>{data.title}</h3>
      {purpleStars.map((star, i) => (
        <div
          key={i}
          className="purpleStar"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            backgroundColor: `${data.borderHoverColour}`,
          }}
        />
      ))}
      <h4 style={theme.text}>{data.description}</h4>
    </div>
  );
}
