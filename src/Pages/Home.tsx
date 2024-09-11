import image1 from "../Images/Screenshot_2023-04-24-20-28-21-08.jpg";
import CV from "../Images/My Resume.pdf";
const Home = () => {
  return (
    <div className="pb-6">
      <div className="border-[4px] border-[#f36f00] rounded-full flex items-center justify-center">
        <img className="size-64 rounded-full" src={image1} alt="image1" />
      </div>
      <h2 className="text-[24px] font-semibold text-start pt-3 tracking-wide">
        {" "}
        Hello, I am <br />
        <span className="text-[24px] font-bold tracking-wide">
          {" "}
          Muhammad Faisal
        </span>
      </h2>
      <h2 className="text-[18px] text-[#f36f00] text-start font-bold tracking-wide">
        Full Stack Web Developer
      </h2>
      <p className="text-[14px] text-start">
        Welcome to my portfolio! I'm a MERN developer specializing in React.js,
        currently seeking internship opportunities to enhance my skills through
        practical projects with experienced teams. Explore my work and let's
        create something amazing together!
      </p>

      <div className="flex gap-4 items-center justify-center mt-6 mb-6">
        <div className="w-10 h-10  border-[3px] border-[#f36f00] rounded-full flex items-center justify-center">
          <a href="https://www.facebook.com/faisal.jawed.399">
            {" "}
            <svg
              className="h-6 w-6 text-[#f36f00] "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
        <div className="w-10 h-10  border-[3px] border-[#f36f00] rounded-full flex items-center justify-center">
          <a href="https://www.linkedin.com/in/faisal-jawed-6b3255214/">
            {" "}
            <svg
              className="h-6 w-6 text-[#f36f00]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
        <div className="w-10 h-10  border-[3px] border-[#f36f00] rounded-full flex items-center justify-center">
          <a href="https://github.com/faisaljaweed?tab=repositories">
            {" "}
            <svg
              className="h-6 w-6 text-[#f36f00]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center ">
        <a href={CV} download>
          <button className="text-[14px] border-2 border-[#f36f00] rounded-3xl">
            {" "}
            Get Resume{" "}
          </button>
        </a>

        <button className="text-[14px] border-2 border-[#f36f00] rounded-3xl ">
          {" "}
          Contact Me{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
