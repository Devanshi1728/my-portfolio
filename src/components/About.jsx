import React from "react";

const About = () => {
  return (
    <div
    name="about"
    className="bg-gradient-to-b to-black from-gray-800 text-white w-full"
  >
    <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
      <div className="text-center pb-8">
        <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#08fdd8] to-[#ff4d4d]">
          About
        </p>
          <div className="w-20 h-1 bg-[#08fdd8] mt-4 mx-auto"></div>
        </div>

        <p className="text-lg sm:text-xl mt-6 sm:mt-10">
          As a software developer with over 4+ years of experience, I have a
          strong working knowledge of various JavaScript frameworks such as
          ReactJS for frontend development and NodeJs for backend development. I
          am proficient in TypeScript, Redux Toolkit, React Router, Mobx,
          MongoDB, and PostgreSQL. I have a sound understanding of ES6 concepts
          and have worked with Material-UI, Ant Design, and Tailwind CSS for
          building modern user interfaces.
        </p>

        <p className="text-lg sm:text-xl mt-6 sm:mt-10">
          In addition, I am experienced in using version control and project
          management tools like Git, Jira, and Bitbucket, and I am familiar with
          Agile development methods. I have excellent communication skills and
          have worked directly with clients on various projects. I am also
          proficient in creating and deploying builds, and I have a basic
          understanding of SEO and Docker. I have worked on diverse projects
          such as E-commerce, FinTech, Real Estate, Cyber Security, and CRM
          Project.
        </p>

        <p className="text-lg sm:text-xl mt-6 sm:mt-10">
          I have integrated REST APIs into UI components and have experience
          working with Redux Toolkit. Additionally, I have designed and
          developed websites in WordPress. My skills include JavaScript,
          ReactJS, Redux Toolkit, MongoDB, NodeJs, TypeScript, and HTML/CSS.
        </p>

        <p className="text-lg sm:text-xl mt-6 sm:mt-10 text-[#08fdd8]">
          I actively keep checking for new updates in this field and I keep
          myself updated with the same.
        </p>
      </div>
    </div>
  );
};

export default About;
