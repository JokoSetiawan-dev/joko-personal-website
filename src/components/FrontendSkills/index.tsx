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
    <div className="flex flex-row items-center justify-center h-skill shadow-custom">
      <div className="flex items-center justify-center flex-col bg-custom-skyblue h-28 w-36 text-xl font-bold text-white">
        <h1>Front</h1>
        <h1>End</h1>
      </div>
      <div className="flex flex-row items-center bg-white h-28 w-800 justify-evenly" >
        <img src={htmlLogo} className="w-12 h-auto" alt="html logo" />
        <img src={cssLogo} className="w-12 h-auto" alt="css logo" />
        <img src={jsLogo} className="w-12 h-auto" alt="javascript logo" />
        <img src={reactLogo} className="w-12 h-auto" alt="react js logo" />
        <img src={typescriptLogo} className="w-12 h-auto" alt="typescript logo" />
        <img src={tailwindLogo} className="w-12 h-auto" alt="tailwind logo" />
        <img src={bootstrapLogo} className="w-12 h-auto" alt="bootstrap logo" />
      </div>
    </div>
  );
};

export default FrontendSkill;
