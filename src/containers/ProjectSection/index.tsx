import { ProjectCard } from "../../components";
import "./index.css"
import helenaLogo from "../../assets/images/helena-logo-white.svg"

const ProjectSection = () => {
  return (
    <>
      <div id="projects" className="flex items-center justify-center min-h-96 mt-14">
        <ProjectCard name={"Helena"} description={"Health Tracker Web App"} imgSources={helenaLogo} linkProjects={""}/>
      </div>
    </>
  );
};

export default ProjectSection;
