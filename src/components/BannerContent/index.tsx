import hero from "../../assets/images/hero.png";

const BannerContent = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:gap-14 justify-between h-screen">
      <div className="flex flex-col justify-center items-center h-screen xl:pl-14">
        <div className="m mt-20 w-4/5 md:mt-40 lg:mt-0">
          <h1 className="text-base lg:text-xl font-bold">JOKO SETIAWAN</h1>
          <p className="text-sm">Full Stack Software Engineer</p>
          <p className="text-[10px] w-4/5 pt-6 md:w-2/4 lg:text-base lg:w-full xl:w-3/4 mb-6">
            "Let's craft extraordinary software solutions together! I'm a
            passionate full-stack engineer turning ideas into elegant,
            functional applications."
          </p>
          <a
            href=""
            className="bg-custom-skyblue self-end font-bold md:text-sm text-ssm text-white py-1 px-4 w-36"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="self-end w-3/4 md:w-[40%] lg:w-3/4 xl:w-[40%]">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default BannerContent;
