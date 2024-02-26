import DeskImg from "../../assets/images/profile-section-image.webp";
import "./index.css";

const Profile = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center p p-7">
        <div className="flex flex-col items-center justify-center text-center w-full md:w-3/4 lg:w-[50%]">
          <div className="hidden">
            <img src={DeskImg} alt="Desk image" />
          </div>
          <div className="flex flex-col items-center justify-center gap-5 md:gap-8">
            <h1 className="text-base font-bold">About Me</h1>
            <p className="text-ssm">
              I am a dedicated full-stack software engineer, driven by a
              passion for crafting seamless and sophisticated digital
              experiences. With a unique blend of creativity and technical
              prowess, I bring ideas to life with functional and visually
              captivating applications. My expertise encompasses both front-end
              finesse and back-end ingenuity, ensuring a perfect balance of
              design and functionality in every project.
            </p>
            <a
              href=""
              className="bg-custom-skyblue font-bold text-white py-1 px-4 w-36"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
