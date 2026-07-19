import ProjectCard from "../components/projects/ProjectCard";
import PageTitle from "../components/ui/PageTitle";
import projects from "../data/Projects.json";

export default function Projects() {
  return (
    <section>
      <PageTitle
        title="Projects"
        as={"h2"}
        className="header2"
        addShadow={true}
      />
      {projects.map((project) => {
        return <ProjectCard data={project} />;
      })}
    </section>
  );
}
