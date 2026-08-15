import { useTheme } from "../../context/ThemeContext";
import { ProjectData } from "../../types";
import Cross from "../icons/Cross";
import AppButton from "../ui/AppButton";
import "./ProjectExpanded.css";

type Props = {
  projectData: ProjectData | null;
  closeCard: () => void;
};

export default function projectExpanded({ projectData, closeCard }: Props) {
  const { theme } = useTheme();

  const technologies = projectData?.technologies ?? [];

  return (
    <>
      {projectData && <div className="project-backdrop" onClick={closeCard} />}
      <div
        className={`expanded-card ${projectData ? "visible" : undefined}`}
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
        <div className="expanded-card-carousel-container">
          <div className="expanded-card-tech-container">
            {[...technologies, ...technologies].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                style={{ ...theme.text, ...theme.pill }}
                className="expanded-card-carousel-rider"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
