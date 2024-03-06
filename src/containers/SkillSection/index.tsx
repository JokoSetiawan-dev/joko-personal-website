import { FrontendSkill, BackendSkill } from "../../components";
import "./index.css"


const SkillSection = () => {
  return (
    <>
      <div id="skills">
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-evenly lg:min-h-500">
            <h1 className="lg:text-xl lg:font-bold">Skills</h1>
            <FrontendSkill/>
            <BackendSkill/>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
