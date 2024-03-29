import React from "react";
import "./index.css"

import rightArrow from "../../assets/images/right-arrow 1.svg"

interface ProjectsData {
  name: string,
  description: string,
  imgSources: string,
  linkProjects: string
}

const ProjectCard: React.FC<ProjectsData> = ({name, description, imgSources, linkProjects}) => {
  return (
    <>
      <div className="flex flex-col items-start md:justify-evenly justify-center lg:gap-14 md:gap-11 gap-10 md:min-h-80 md:w-944">
        <h1 className="text-xl font-bold flex self-center">Works</h1>
        <div className="md:grid lg:grid-cols-4 md:grid-cols-3 md:gap-9 flex flex-col gap-10">
            <div className="w-52 h-56 bg-white shadow-custom">
                <div className="flex items-center justify-center bg-custom w-52 h-28">
                    <img src={imgSources} className="w-4/5 h-auto" alt="helena logo" />
                </div>
                <div className="flex flex-col items-center justify-center gap-5 w-52 h-28 bg-white">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg font-bold">{name}</h1>
                        <p className="text-sm">{description}</p>
                    </div>
                    <a href={linkProjects} className="flex self-end mr-5">
                        <img src={rightArrow} className="h-4 w-4" alt="right arrow" />
                    </a>
                </div>
            </div>
        </div>
        <a href="" className="flex self-center bg-custom-skyblue font-bold text-white py-2 px-4">See More</a>
      </div>
    </>
  );
};

export default ProjectCard;
