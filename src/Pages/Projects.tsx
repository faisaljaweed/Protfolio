import Data from "./Data";

const Projects = () => {
  return (
    <div>
      <h1 className="text-[24px] font-bold text-start pt-10 pb-10">
        My Protfolios
      </h1>
      <div className="flex flex-col gap-4">
        {Data.map((item) => {
          return (
            <div key={item.id} className="pt-10 pb-10 pl-4 pr-4 shadow-lg  ">
              <div className="flex justify-center items-center pb-4">
                <img className="w-52 h-36" src={item.image} alt={item.tittle} />
              </div>
              <h2 className="text-start text-[#00ae76] font-bold text-[24px]">
                {item.tittle}
              </h2>
              <p className="text-start text-black font-semibold text-[16px] tracking-wider pt-4 pb-4">
                {item.desc}
              </p>
              <div className="flex justify-center items-center flex-row gap-4 pt-3 pb-3">
                <a href={item.deployUrl}>
                  {" "}
                  <button className="bg-[#00ae76] text-white hover:bg-white hover:text-black font-bold text-[20px]">
                    View
                  </button>
                </a>
                <a href={item.githubUrl}>
                  {" "}
                  <button className="text-black bg-white hover:bg-[#00ae76] hover:text-white font-bold text-[20px]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
