import React from "react";

const About = () => {
  return (
    <div name="about" 
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      
      <div className="flex flex-col justify-center p-4 h-full max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        I am a passionate ReactJS developer with 2+ years of hands-on experience with building and designing software.
        As a Software developer, I build several modern software using ReactJS, 
        NodeJs and develop a highly functional and reusable UI component and develop RESTful APIs, 
        integrate REST APIs to UI components, Working with Redux Toolkit, strong proficiency in JavaScript.
        </p>

        <p className="text-xl mt-10 text-[#08fdd8]">
        I actively keep checking for new updates in this field and I keep myself updated with the same.
        </p>
      </div>
    </div>
  );
};

export default About;
