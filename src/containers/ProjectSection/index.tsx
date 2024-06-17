import { ProjectCard } from "../../components";
import "./index.css";
import helenaLogo from "../../assets/images/helena-logo-white.svg";
import bankz from "../../assets/images/LOGO3-01.webp"
import unisky from "../../assets/images/unisky-logo.svg"

const ProjectSection = () => {
  return (
    <>
      <div
        id="projects"
        className="flex flex-col items-center justify-center w-full min-h-96 mt-14"
      >
        <h1 className="text-xl font-bold flex self-center mb-10">Works</h1>
        <div className="md:grid lg:grid-cols-3 md:grid-cols-3 md:gap-9 flex flex-col gap-10">
          <ProjectCard
            description={
              "Unisky Weather App delivers accurate daily and weekly forecasts with an intuitive, user-friendly interface. Stay prepared for any weather conditions."
            }
            imgSources={unisky}
            linkGithub={"https://github.com/JokoSetiawan-dev/unisky-weather-app"}
            linkWeb={"https://unisky-weather-app.vercel.app/"}
            techStack={
              "NextJs, Typesript, Shadcn, Tailwind CSS"
            }
          />
          <ProjectCard
            description={
              "Helena: Health Tracker is a web app that lets users monitor and manage health with real-time visualization and personalized insights, offering an engaging, user-friendly experience."
            }
            imgSources={helenaLogo}
            linkGithub={"https://github.com/Helena-health-tracker-assistant/Helena-client"}
            linkWeb={"https://helena-health-tracker.web.app/home"}
            techStack={
              "NodeJS, ReactJs, MaterialUI, Framer Motion, Recharts, Google Maps API, Formik, Yup"
            }
          />
          <ProjectCard
            description={
              "Bank of Z's web profile, crafted using HTML, JavaScript, and CSS, provides a secure and user-friendly platform for online banking."
            }
            imgSources={bankz}
            linkGithub={"https://github.com/RevoU-FSSE-2/week-5-JokoSetiawan-dev"}
            linkWeb={"https://investreeassw4.site/"}
            techStack={
              "JavaScript, HTML, CSS"
            }
          />
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
