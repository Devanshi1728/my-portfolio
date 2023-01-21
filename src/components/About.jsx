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

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          officiis rerum facilis ut, nostrum qui. Enim, non, quo deleniti
          consequuntur accusantium aperiam architecto vitae nihil necessitatibus
          quasi atque iure sint. Ipsam animi nihil aliquam tempora minima illum
          numquam? Velit quae quidem architecto debitis est fugiat aspernatur
          facere voluptate aliquam rerum!
        </p>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quam
          odit neque similique nisi at odio accusantium molestiae reiciendis
          nemo. Eaque aspernatur nostrum magnam natus placeat dolor amet
          accusantium ullam omnis, temporibus quas esse, laudantium nihil!
          Doloremque in placeat soluta error cumque fugiat itaque laudantium
          labore ea corporis. Impedit, nostrum.
        </p>
      </div>
    </div>
  );
};

export default About;
