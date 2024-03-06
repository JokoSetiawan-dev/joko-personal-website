import "./index.css"
import htmlLogo from "../../assets/images/html.png"
import cssLogo from "../../assets/images/css.png"
import jsLogo from "../../assets/images/js.png"
import reactLogo from "../../assets/images/react.svg"
import typescriptLogo from "../../assets/images/ts.svg"
import tailwindLogo from "../../assets/images/tailwind.svg"
import bootstrapLogo from "../../assets/images/bootstrap.svg"

const FrontendSkill = () => {
  return (
    <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:shadow-custom">
      <div className="lg:flex lg:items-center lg:justify-center lg:flex-col bg-custom-skyblue lg:h-28 lg:w-36 lg:text-xl lg:font-bold lg:text-white">
        <h1>Front</h1>
        <h1>End</h1>
      </div>
      <div className="lg:flex lg:flex-row lg:items-center lg:bg-white lg:h-28 lg:w-800 w-3/4 justify-evenly sm:grid sm:grid-cols-3 " >
        <img src={htmlLogo} className="md:w-12 sm:w-9 flex items-center justify-center h-auto" alt="html logo" />
        <img src={cssLogo} className="md:w-12 sm:w-9 flex items-center justify-center h-auto" alt="css logo" />
        <img src={jsLogo} className="md:w-12 sm:w-9 flex items-center justify-center h-auto" alt="javascript logo" />
        <img src={reactLogo} className="md:w-12 sm:w-9 flex items-center justify-center h-auto" alt="react js logo" />
        <img src={typescriptLogo} className="md:w-12 sm:w-9 flex items-center justify-center h-auto" alt="typescript logo" />
        <img src={tailwindLogo} className="md:w-12 sm:w-9 flex items-center justify-center h-auto" alt="tailwind logo" />
        <img src={bootstrapLogo} className="md:w-12 sm:w-9 flex items-center justify-center h-auto" alt="bootstrap logo" />
      </div>
    </div>
  );
};

export default FrontendSkill;
