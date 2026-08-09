import ProjectCard from "../components/projects/ProjectCard";
import PageTitle from "../components/ui/PageTitle";
import projects from "../data/Projects.json";
import "./Projects.css";

export default function Projects() {
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
      <article>
        {projects.map((project) => {
          return <ProjectCard key={project.id} data={project} />;
        })}
      </article>
    </section>
  );
}
