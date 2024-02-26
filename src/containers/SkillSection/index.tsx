import { FrontendSkill, BackendSkill } from "../../components";
import "./index.css"


const SkillSection = () => {
  return (
    <>
      <div id="skills">
        <div className="flex flex-col items-center justify-evenly min-h-500">
            <h1 className="text-xl font-bold">Skills</h1>
            <FrontendSkill/>
            <BackendSkill/>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
