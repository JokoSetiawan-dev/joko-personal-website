import { ProjectCard } from "../../components";
import "./index.css"

const ProjectSection = () => {
  return (
    <>
      <div id="projects" className="flex items-center justify-center min-h-96 mt-14">
        <ProjectCard/>
      </div>
    </>
  );
};

export default ProjectSection;
