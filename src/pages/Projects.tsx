import Button from "../Components/Button";
import ProjectItem from "../Components/ProjectItem";
import { projects } from "../data/projects";
import { IProjects } from "../data/types";
const Projects = () => {
  return (
    <div className="my-3">
      <h1 className="text-center text-4xl font-bold tracking-wide md:text-5xl animate-fade-up">
        Projects
      </h1>
      {projects.map((project: IProjects) => (
        <ProjectItem
          key={project.title}
          title={project.title}
          description={project.description}
          url={project.url}
          technologies={project.technologies}
        />
      ))}
      <Button text="Back" url="/" />
    </div>
  );
};

export default Projects;
