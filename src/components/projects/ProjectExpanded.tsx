import { useTheme } from "../../context/ThemeContext";
import { ProjectData } from "../../types";
import GitHubIcon from "../../assets/githubIcon.svg?react";
import Cross from "../icons/Cross";
import AppButton from "../ui/AppButton";
import "./ProjectExpanded.css";
import { Carousel, PillItem } from "../ui/Carousel";
import Separator from "../ui/Separator";
import { currentTheme } from "../../styles/theme";

type Props = {
  projectData: ProjectData | null;
  closeCard: () => void;
};

export default function ProjectExpanded({ projectData, closeCard }: Props) {
  const { theme } = useTheme();

  const technologies = projectData?.technologies ?? [];

  const MIN_REPEATS = technologies.length <= 5 ? 8 : 2;
  const repeatedTechnologies: PillItem[] = Array.from(
    { length: MIN_REPEATS },
    (_, repeatIndex) =>
      technologies.map((tech, techIndex) => ({
        id: `${tech}-${repeatIndex}-${techIndex}`,
        label: tech,
      })),
  ).flat();

  return (
    <>
      {projectData && <div className="project-backdrop" onClick={closeCard} />}
      <div
        className={`expanded-card ${projectData ? "visible" : ""}`}
        style={{ ...theme.card }}
      >
        <div className="expanded-card-header">
          <div className="expanded-card-title">
            {projectData?.images.logo && (
              <img
                src={projectData.images.logo}
                alt={`${projectData.name} logo`}
              />
            )}
            <h2 style={{ ...theme.text }}>{projectData?.name}</h2>
          </div>

          <AppButton
            className="buttonVariant2"
            onPress={closeCard}
            leftIcon={<Cross />}
          />
        </div>

        <Carousel items={repeatedTechnologies} />

        <div className="expanded-card-footer">
          <Separator colour={currentTheme.MainColour} alpha={100} />
          <div className="expanded-card-footer-links">
            {projectData?.links.liveDemo && (
              <div>
                <img
                  src={projectData.images.logo}
                  alt={`${projectData.name} logo`}
                />
                <a href={projectData.links.liveDemo} style={{ ...theme.text }}>
                  Live Demo
                </a>
              </div>
            )}
            {projectData?.links.github && (
              <div>
                <GitHubIcon
                  style={theme.svgIcons}
                  className="GitHubLinkedInIcon"
                />
                <a href={projectData.links.github} style={{ ...theme.text }}>
                  GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
