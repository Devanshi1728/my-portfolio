import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col justify-center p-4 h-full max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          As a software developer with over 2+ years of experience, I have a
          strong working knowledge of various JavaScript frameworks such as
          ReactJS for frontend development and NodeJs for backend development. I
          am proficient in TypeScript, Redux Toolkit, React Router, Storybook,
          MongoDB, and PostgreSQL. I have a sound understanding of ES6 concepts
          and have worked with Material-UI, Ant Design, and Tailwind CSS for
          building modern user interfaces.
        </p>

        <p className="text-xl mt-10 ">
          In addition, I am experienced in using version control and project
          management tools like Git, Jira, and Bitbucket, and I am familiar with
          Agile development methods. I have excellent communication skills and
          have worked directly with clients on various projects. I am also
          proficient in creating and deploying builds, and I have a basic
          understanding of SEO and Docker. I have worked on diverse projects
          such as E-commerce, FinTech, Real Estate, Cyber Security, and CRM
          Project.
        </p>

        <p className="text-xl mt-10">
          I have integrated REST APIs into UI components and have experience
          working with Redux Toolkit. Additionally, I have designed and
          developed websites in WordPress. My skills include JavaScript,
          ReactJS, Redux Toolkit, MongoDB, NodeJs, TypeScript, and HTML/CSS.
        </p>

        <p className="text-xl mt-10 text-[#08fdd8]">
          I actively keep checking for new updates in this field and I keep
          myself updated with the same.
        </p>
      </div>
    </div>
  );
};

export default About;
