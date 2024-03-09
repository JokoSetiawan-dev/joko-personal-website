import { FrontendSkill, BackendSkill, SkillsAnimated } from "../../components";
import "./index.css"


const SkillSection = () => {
  return (
    <>
      <div id="skills">
        <div className=" flex-col items-center justify-evenly min-h-500 hidden">
            <h1 className="text-xl font-bold">Skills</h1>
            <FrontendSkill/>
            <BackendSkill/>
        </div>
        <div>
          <SkillsAnimated/>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
