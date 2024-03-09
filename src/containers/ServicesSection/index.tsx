import { ServiceCard, Whatido } from "../../components";
import "./index.css"

const ServicesSection = () => {
  return (
    <>
      <div id="services" className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center md:justify-start sm:justify-start md:py-14 sm:py-10 md:mt-24 mt-12 max-w-944 bg-white sm:w-[90%] h-[1050px] md:h-[550px]">
            <Whatido/>
            <ServiceCard/>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
