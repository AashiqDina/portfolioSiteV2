import { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import PageTitle from "../components/ui/PageTitle";
import projects from "../data/Projects.json";
import "./Projects.css";
import { ProjectData } from "../types";
import ProjectExpanded from "../components/projects/ProjectExpanded";

export default function Projects() {
  const [cardExpanded, setCardExpanded] = useState<ProjectData | null>(null);

  const sortedProjects = projects.sort((a, b) => {
    return b.impact - a.impact;
  });

  const closeCard = () => {
    setCardExpanded(null);
  };

  return (
    <section className="ProjectsPage">
      <div>
        <PageTitle
          title="Projects"
          as={"h2"}
          className="header2"
          addShadow={true}
        />
      </div>
      <ProjectExpanded
        projectData={cardExpanded}
        closeCard={closeCard}
      ></ProjectExpanded>
      <article>
        {[...sortedProjects].map((project) => {
          return (
            <ProjectCard
              key={project.id}
              data={project}
              expandCard={() => {
                setCardExpanded(project);
              }}
            />
          );
        })}
      </article>
    </section>
  );
}
