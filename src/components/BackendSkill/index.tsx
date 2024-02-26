import "./index.css"
import jsLogo from "../../assets/images/js.png"
import tsLogo from "../../assets/images/ts.svg"
import nodejsLogo from "../../assets/images/nodejs.svg"
import pythonLogo from "../../assets/images/python.png"
import expressLogo from "../../assets/images/express.svg"
import mysqlLogo from "../../assets/images/mysql.png"
import mongoLogo from "../../assets/images/mongodb.png"


const BackendSkill = () => {
  return (
    <div className="flex flex-row items-center justify-center h-skill shadow-custom">
      <div className="flex items-center justify-center flex-col bg-custom-skyblue h-28 w-36 text-xl font-bold text-white">
        <h1>Front</h1>
        <h1>End</h1>
      </div>
      <div className="flex flex-row items-center bg-white h-28 w-800 justify-evenly" >
        <img src={jsLogo} className="w-12 h-auto" alt="javascript logo" />
        <img src={tsLogo} className="w-12 h-auto" alt="typescript logo" />
        <img src={nodejsLogo} className="w-12 h-auto" alt="nodejs logo" />
        <img src={pythonLogo} className="w-12 h-auto" alt="python logo" />
        <img src={expressLogo} className="w-12 h-auto" alt="express logo" />
        <img src={mysqlLogo} className="w-12 h-auto" alt="mysql logo" />
        <img src={mongoLogo} className="w-12 h-auto" alt="mongodb logo" />
      </div>
    </div>
  );
};

export default BackendSkill;
