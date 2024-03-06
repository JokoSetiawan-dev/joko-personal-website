import "./index.css"
import helenaLogo from "../../assets/images/helena-logo-white.svg"
import rightArrow from "../../assets/images/right-arrow 1.svg"

const ProjectCard = () => {
  return (
    <>
      <div className="flex flex-col items-start md:justify-evenly justify-center lg:gap-14 md:gap-11 gap-10 md:min-h-80 md:w-944">
        <h1 className="text-xl font-bold flex self-center">Projects</h1>
        <div className="md:grid lg:grid-cols-4 md:grid-cols-3 md:gap-9 flex flex-col gap-10">
            <div className="w-52 h-56 bg-white shadow-custom">
                <div className="flex items-center justify-center bg-custom w-52 h-28">
                    <img src={helenaLogo} className="w-4/5 h-auto" alt="helena logo" />
                </div>
                <div className="flex flex-col items-center justify-center gap-5 w-52 h-28 bg-white">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg font-bold">Helena</h1>
                        <p className="text-sm">Health tracking web app</p>
                    </div>
                    <a href="" className="flex self-end mr-5">
                        <img src={rightArrow} className="h-4 w-4" alt="right arrow" />
                    </a>
                </div>
            </div>
            <div className="w-52 h-56 bg-white shadow-custom">
                <div className="flex items-center justify-center bg-custom w-52 h-28">
                    <img src={helenaLogo} className="w-4/5 h-auto" alt="helena logo" />
                </div>
                <div className="flex flex-col items-center justify-center gap-5 w-52 h-28 bg-white">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg font-bold">Helena</h1>
                        <p className="text-sm">Health tracking web app</p>
                    </div>
                    <a href="" className="flex self-end mr-5">
                        <img src={rightArrow} className="h-4 w-4" alt="right arrow" />
                    </a>
                </div>
            </div>
            <div className="w-52 h-56 bg-white shadow-custom">
                <div className="flex items-center justify-center bg-custom w-52 h-28">
                    <img src={helenaLogo} className="w-4/5 h-auto" alt="helena logo" />
                </div>
                <div className="flex flex-col items-center justify-center gap-5 w-52 h-28 bg-white">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg font-bold">Helena</h1>
                        <p className="text-sm">Health tracking web app</p>
                    </div>
                    <a href="" className="flex self-end mr-5">
                        <img src={rightArrow} className="h-4 w-4" alt="right arrow" />
                    </a>
                </div>
            </div>
            <div className="w-52 h-56 bg-white shadow-custom">
                <div className="flex items-center justify-center bg-custom w-52 h-28">
                    <img src={helenaLogo} className="w-4/5 h-auto" alt="helena logo" />
                </div>
                <div className="flex flex-col items-center justify-center gap-5 w-52 h-28 bg-white">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg font-bold">Helena</h1>
                        <p className="text-sm">Health tracking web app</p>
                    </div>
                    <a href="" className="flex self-end mr-5">
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
