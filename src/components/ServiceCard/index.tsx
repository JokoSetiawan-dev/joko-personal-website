import "./index.css";
import fullStack from "../../assets/images/software-developer.png";
import backEnd from "../../assets/images/back-end.png"
import frontEnd from "../../assets/images/front-end.png"

const ServiceCard = () => {
  return (
    <>
      <div className=" flex md:flex-row sm:flex-col items-center justify-center lg:gap-44 md:gap-24 sm:gap-20 w-full sm:h-auto sm:mt-12 md:mt-20">
        <div className="flex flex-col w-auto items-center justify-center h-auto">
          <div className="flex flex-col w-auto items-center justify-center h-auto gap-3">
            <img className="w-20 h-auto" src={fullStack} alt="" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-base">Full Stack</h1>
              <h1 className="font-bold text-base">Development</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-auto items-center justify-center h-auto">
          <div className="flex flex-col w-auto items-center justify-center h-auto gap-3">
            <img className="w-20 h-auto" src={frontEnd} alt="" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-base">Front End</h1>
              <h1 className="font-bold text-base">Development</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-auto items-center justify-center h-auto">
          <div className="flex flex-col w-auto items-center justify-center h-auto gap-3">
            <img className="w-20 h-auto" src={backEnd} alt="" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-base">Back End</h1>
              <h1 className="font-bold text-base">Development</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
