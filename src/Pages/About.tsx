import image1 from "../Images/Screenshot_2023-04-24-20-28-21-08.jpg";
const About = () => {
  return (
    <div className="p-[2rem] md:flex md:justify-center md:items-center md:flex-col lg:ml-64">
      <h1 className="text-start text-[24px] pt-8 text-[#00ae76] font-extrabold ">
        About me
      </h1>
      <h2 className="text-start text-[20px] font-bold text-[#00ae76] md:text-[30px]">
        Muhammad Faisal Jawed
      </h2>
      <div className="size-[200px]  border-[6px] border-[#00ae76] rounded-full flex items-center justify-center">
        <img className="size-48 rounded-full " src={image1} alt="image1" />
      </div>
      <p className="text-start text-[16px] tracking-wider pt-5 text-white">
        {/* Hello! My name is Muhammad Yousaf, and I am a MERN stack developer
        currently in my first semester of a Bachelor’s degree in Computer
        Science. My journey in technology began with a passion for crafting
        engaging digital experiences. After completing my intermediate
        education, I focused on MERN stack development, mastering MongoDB,
        Express.js, React, and Node.js. I have also gained proficiency in HTML,
        CSS, and Bootstrap for creating responsive and visually appealing web
        interfaces. JavaScript is my primary language for both frontend and
        backend development, and I use Redux Toolkit for efficient state
        management in React applications. Currently, I am expanding my skill set
        by enrolling in a mobile development course that covers React Native,
        further broadening my ability to create comprehensive and versatile
        solutions. */}
        Hello My name is Muhammad Faisal Jawed I am a skilled MERN Stack
        Developer with a strong passion for building dynamic and user-friendly
        web applications. With a deep understanding of MongoDB, Express.js,
        React, and Node.js, I create efficient and scalable solutions. Alongside
        my expertise in MERN, I also have experience in Flutter for developing
        cross-platform mobile applications, making me capable of delivering
        seamless user experiences on both web and mobile platforms.
        <p className="text-start text-[16px] tracking-wider pt-3">
          {" "}
          I am always eager to learn new technologies and enhance my skills, and
          I thrive on solving complex problems with innovative solutions. My
          goal is to contribute to projects that make a meaningful impact while
          continuously growing as a developer.
        </p>
      </p>
    </div>
  );
};

export default About;
