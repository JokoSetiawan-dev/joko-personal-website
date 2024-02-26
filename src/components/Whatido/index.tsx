import "./index.css";

const Whatido = () => {
  return (
    <div>
      <div className="flex md:flex-row sm:flex-col items-center sm:justify-center md:justify-between lg:gap-52 md:gap-16 sm:gap-10 md:px-14 sm:px-10">
        <div className="font-bold text-skyblue lg:text-[3rem] self-start sm:text-xxl">
          <h1>What i</h1>
          <h1>Do for you?</h1>
        </div>
        <div className="flex flex-col gap-4 sm:max-w-80 md:w-2/5">
          <div className="text-xl font-semibold">
            <h1>An overview of</h1>
            <h1>what i do.</h1>
          </div>
          <p className="text-ssm">
            as software engineer, I handle both frontend and
            backend technologies with ease. Drawing on a background in economics
            and business, I deliver strategic digital solutions for growth and
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whatido;
