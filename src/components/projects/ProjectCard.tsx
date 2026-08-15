import { useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { ProjectData } from "../../types";
import "./ProjectCard.css";
import { applyTilt } from "../../utils/applyTilt";
import AppButton from "../ui/AppButton";

type Props = {
  data: ProjectData;
  expandCard: () => void;
};

export default function ProjectCard({ data, expandCard }: Props) {
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

  function handleExpandCard() {
    expandCard();
    handleMoveEnd();
  }

  const tiltHandlers = {
    onMouseMove: handleMouseMove,
    onTouchMove: handleTouchMove,
    onMouseLeave: handleMoveEnd,
    onTouchEnd: handleMoveEnd,
  };

  // -----------------------------------------------

  return (
    <>
      <div {...tiltHandlers} className={`project-card-parent`}>
        <div
          className={`project-card-container`}
          style={theme.card}
          ref={projectCardRef}
        >
          <div className="project-card-header">
            {data.images.logo && (
              <img src={data.images.logo} alt={`${data.name} logo`} />
            )}
            <h3 style={theme.text}>{data.name}</h3>
          </div>
          <div className="project-card-body">
            <img src={data.images.thumbnail} alt={`${data.name} thumbnail`} />
            <p style={theme.text}>{data.summary}</p>
          </div>
          <div className="project-card-footer">
            {data.links.liveDemo && (
              <AppButton
                className="project-card-footer-buttons"
                textClassName="project-card-footer-buttons-text"
                onPress={() => {
                  const url = data.links.liveDemo;

                  if (url) {
                    window.location.href = url;
                  }
                }}
              >
                Live Demo
              </AppButton>
            )}
            <AppButton
              className="project-card-footer-buttons"
              textClassName="project-card-footer-buttons-text"
              onPress={handleExpandCard}
            >
              Details
            </AppButton>
          </div>
        </div>
      </div>
    </>
  );
}
