import React from "react";
import "./index.css";
import github from "../../assets/images/github-logo.png";
import production from "../../assets/images/world-wide-web.png"

interface ProjectsData {
  description: string;
  imgSources: string;
  linkGithub: string;
  techStack: string;
  linkWeb: string;
}

const ProjectCard: React.FC<ProjectsData> = ({
  description,
  imgSources,
  linkGithub,
  techStack,
  linkWeb,
}) => {
  return (
    <>
      <div className="flex flex-col items-start md:justify-evenly justify-center lg:gap-14 md:gap-11 gap-10 md:min-h-80 md:w-944">
        <div >
          <div className="w-[320px] h-[400px] bg-white shadow-custom">
            <div className="flex items-center justify-center bg-custom w-full h-36">
              <img
                src={imgSources}
                className="w-4/5 h-auto"
                alt="helena logo"
              />
            </div>
            <div className="flex flex-col items-start py-3 px-4 justify-center gap-5 w-full h-auto bg-white">
              <div className="flex flex-col gap-1">
                <p className="text-ssm mt-2">{description}</p>
              </div>
              <div>
                <h1 className="text-sm">Tech Stack :</h1>
                <p className="text-ssm mt-1">{techStack}</p>
              </div>
              <div className="flex gap-5">
                <a href={linkGithub}>
                  <img src={github} className="h-7 w-7" alt="right arrow" />
                </a>
                <a href={linkWeb}>
                  <img src={production} className="h-7 w-7" alt="right arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
