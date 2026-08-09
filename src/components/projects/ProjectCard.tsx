import { useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { WHITE } from "../../styles/colours";
import { ProjectData } from "../../types";
import Seperator from "../ui/Seperator";
import "./ProjectCard.css";
import { applyTilt } from "../../utils/applyTilt";
import AppButton from "../ui/AppButton";
import AppLink from "../ui/AppLink";

type Props = {
  data: ProjectData;
};

export default function ProjectCard({ data }: Props) {
  const { theme } = useTheme();
  const projectCardRef = useRef<HTMLDivElement | null>(null);

  // tilt functions -----------------------------------

  function tilt(clientX: number, clientY: number) {
    const projCard = projectCardRef.current;
    if (!projCard) return null;

    applyTilt(projCard, clientX, clientY, 10, 50);
  }

  function handleMouseMove(e: React.MouseEvent) {
    tilt(e.clientX, e.clientY);
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!e.touches.length) return;

    const touch = e.touches[0];
    tilt(touch.clientX, touch.clientY);
  }

  function handleMoveEnd() {
    const projCard = projectCardRef.current;
    if (!projCard) return null;
    projCard.style.transform = "scale(1) rotateX(0) rotateY(0)";
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMoveEnd}
      onTouchEnd={handleMoveEnd}
    >
      <div
        className="project-card-container"
        style={theme.card}
        ref={projectCardRef}
      >
        <h3 style={theme.text}>{data.name}</h3>
        <div className="project-card-body">
          <img src={data.images.thumbnail} alt={`${data.name} thumbnail`} />
          <p style={theme.text}>{data.descriptions}</p>
        </div>
        <div className="project-card-footer">
          {data.links.liveDemo && (
            <AppButton
              className="project-card-footer-buttons"
              textClassName="project-card-footer-buttons-text"
            >
              Live Demo
            </AppButton>
          )}
          <AppButton
            className="project-card-footer-buttons"
            textClassName="project-card-footer-buttons-text"
          >
            Details
          </AppButton>
        </div>
      </div>
    </div>
  );
}
