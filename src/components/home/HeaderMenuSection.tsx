import { useEffect, useMemo, useRef, useState } from "react";
import { headerPagesData } from "../../types";
import "./HeaderMenuSection.css";
import { useTheme } from "../../context/ThemeContext";
import { addAlpha } from "../../styles/colours";
import getPagesData from "../../data/getPagesData";
import Stars from "../background/Stars";
import { Link } from "react-router-dom";

function formatData(data: headerPagesData[]): headerPagesData[][] {
  const formattedData: headerPagesData[][] = [];

  for (let i = 0; i < data.length; i += 3) {
    formattedData.push(data.slice(i, i + 3));
  }

  return formattedData;
}

type props = {
  fillHeight?: boolean;
  closeMenu?: () => void;
};

export default function HeaderMenuSections({
  fillHeight = false,
  closeMenu,
}: props) {
  const { theme } = useTheme();
  const [data, setData] = useState<headerPagesData[][]>([]);

  useEffect(() => {
    const pagesData = getPagesData(theme);
    const formattedData = formatData(pagesData);
    setData(formattedData);
  }, []);

  return (
    <div
      className="HeaderMenuSectionsContainer"
      style={{
        ...(!fillHeight && theme.headerModal),
        ...(fillHeight && { height: "100%", padding: 0 }),
      }}
    >
      {data.map((formattedData, index) => {
        return (
          <div
            className={
              index % 2
                ? `HeaderMenuSectionLayout One`
                : `HeaderMenuSectionLayout Two`
            }
            key={`${index}-${formattedData[0].title}`}
          >
            {formattedData.map((data, childIndex) => {
              return (
                <QuickSectionBox
                  data={data}
                  parentIndex={index}
                  childIndex={childIndex}
                  key={`${data.title}-${childIndex}`}
                  closeMenu={closeMenu ?? undefined}
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
  center?: true;
  closeMenu?: () => void;
};

export function QuickSectionBox({
  data,
  parentIndex,
  childIndex,
  center,
  closeMenu,
}: QuickSectionBoxProps) {
  const { theme } = useTheme();
  const type = parentIndex % 2 === 0 ? 1 : 2;
  const cardRef = useRef<HTMLDivElement>(null);

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
      style={{
        ...theme.headerNavButtons,
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={closeMenu ?? undefined}
    >
      <Link to={data.path} className="HeaderMenuBoxContainer">
        <h3
          style={{
            ...theme.text,
            ...(center ? { textAlign: "center", width: "100%" } : undefined),
          }}
        >
          {data.title}
        </h3>
        <Stars count={10} colour={data.borderHoverColour} />
        {data.description ? (
          <h4 style={theme.text}>{data.description}</h4>
        ) : undefined}
      </Link>
    </div>
  );
}
