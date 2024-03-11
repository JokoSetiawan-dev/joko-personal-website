import Marquee from "react-fast-marquee";
import htmlLogo from "../../assets/images/html.png";
import cssLogo from "../../assets/images/css.png";
import jsLogo from "../../assets/images/js.png";
import reactLogo from "../../assets/images/react.svg";
import typescriptLogo from "../../assets/images/ts.svg";
import tailwindLogo from "../../assets/images/tailwind.svg";
import bootstrapLogo from "../../assets/images/bootstrap.svg";
import nodejsLogo from "../../assets/images/nodejs.svg";
import pythonLogo from "../../assets/images/python.png";
import expressLogo from "../../assets/images/express.svg";
import mysqlLogo from "../../assets/images/mysql.png";
import mongoLogo from "../../assets/images/mongodb.png";
import "./index.css"; // Import the CSS file for animations

const SkillsAnimated = () => {
  return (
    <div className=" flex flex-col w-full items-center justify-center gap-14 md:py-20 py-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-lg font-bold">The Tools I Use</p>
        <p className="md:block hidden text-ssm">I use the following tools to create a full-stack web app</p>
      </div>
      <div className="flex flex-row items-center justify-start w-full lg:max-w-[944px]">
        <Marquee
          pauseOnHover
          gradient
          direction="right"
          gradientColor="#FBF9F1"
          gradientWidth={150}
        >
          <div>
            <img
              src={htmlLogo}
              alt="HTML Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={cssLogo}
              alt="CSS Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={jsLogo}
              alt="JavaScript Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={reactLogo}
              alt="React Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={typescriptLogo}
              alt="TypeScript Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={tailwindLogo}
              alt="Tailwind CSS Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={bootstrapLogo}
              alt="Bootstrap Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={nodejsLogo}
              alt="Node.js Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={pythonLogo}
              alt="Python Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={expressLogo}
              alt="Express Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={mysqlLogo}
              alt="MySQL Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={mongoLogo}
              alt="MongoDB Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
        </Marquee>
      </div>
      <div className="flex flex-row items-center justify-start w-full lg:max-w-[944px]">
        <Marquee
          pauseOnHover
          gradient
          gradientColor="#FBF9F1"
          gradientWidth={150}
        >
          <div>
            <img
              src={htmlLogo}
              alt="HTML Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={cssLogo}
              alt="CSS Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={jsLogo}
              alt="JavaScript Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={reactLogo}
              alt="React Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={typescriptLogo}
              alt="TypeScript Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={tailwindLogo}
              alt="Tailwind CSS Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={bootstrapLogo}
              alt="Bootstrap Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={nodejsLogo}
              alt="Node.js Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={pythonLogo}
              alt="Python Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={expressLogo}
              alt="Express Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={mysqlLogo}
              alt="MySQL Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
          <div>
            <img
              src={mongoLogo}
              alt="MongoDB Logo"
              className="w-auto md:h-[40px] h-[30px] md:px-16 sm:px-7 filter grayscale"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsAnimated;
