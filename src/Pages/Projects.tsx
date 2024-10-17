import Data from "./Data";

const Projects = () => {
  return (
    <div className="p-[2rem] lg:ml-64 lg:flex lg:flex-col lg:items-center">
      <h1 className="text-[24px] font-bold text-center pt-10 pb-10 text-[#00ae76]">
        My Portfolios
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:place-items-center ">
        {Data.map((item) => {
          return (
            <div
              key={item.id}
              className="pt-10 pb-10 pl-4 pr-4 shadow-lg bg-[#141414]"
            >
              <div className="flex justify-center items-center pb-4">
                <img className="w-52 h-36" src={item.image} alt={item.tittle} />
              </div>
              <h2 className="text-center text-[#00ae76] font-bold text-[24px]">
                {item.tittle}
              </h2>
              <p className="text-center font-semibold text-[16px] tracking-wider text-white pt-4 pb-4">
                {item.desc}
              </p>
              <div className="flex justify-center items-center gap-4 pt-3 pb-3">
                <a href={item.deployUrl}>
                  <button className="bg-[#00ae76] text-white px-3 hover:bg-white hover:text-black font-bold text-[20px]">
                    View
                  </button>
                </a>
                <a href={item.githubUrl}>
                  <button className="text-black bg-white px-3 hover:bg-[#00ae76] hover:text-white font-bold text-[20px]">
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
