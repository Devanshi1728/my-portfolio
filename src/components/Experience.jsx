import React from "react";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import css from "../assets/css.png";

const Experience = () => {
  const links = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 8, src: css, title: "CSS", style: "shadow-yellow-300" },
    { id: 2, src: javascript, title: "JavaScript", style: "shadow-yellow-300" },
    { id: 3, src: react, title: "ReactJS", style: "shadow-blue-600" },
    { id: 4, src: tailwind, title: "Tailwind", style: "shadow-cyan-500" },
    { id: 5, src: node, title: "NodeJS", style: "shadow-green-300" },
    { id: 7, src: github, title: "GitHub", style: "shadow-gray-600" },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="container mx-auto px-6 sm:px-12 max-w-screen-lg">
        <div className="text-center pb-12">
          <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#08fdd8] to-[#ff4d4d]">
            Experience
          </p>
          <div className="w-16 h-1 bg-[#08fdd8] mx-auto mt-4"></div>
          <p className="mt-4 text-xl text-gray-400">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
          {links.map(({ id, src, style, title }) => (
            <div
              key={id}
              className={`${style} shadow-md hover:scale-105 transition-transform duration-500 p-6 rounded-lg bg-gray-900 hover:bg-gray-800`}
            >
              <img src={src} alt={title} className="w-20 mx-auto mb-4" />
              <p className="text-xl font-medium text-center text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
