import React from "react";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import css from "../assets/css.png";

const Experience = () => {
  const links = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
        id: 8,
        src: css,
        title: "CSS",
        style: "shadow-yellow-300",
    },
    {
      id: 2,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-300",
    },
    {
      id: 3,
      src: react,
      title: "ReactJs",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-300",
    },
    {
      id: 6,
      src: nextjs,
      title: "NextJs",
      style: "shadow-white",
    },
    {
        id: 7,
        src: github,
        title: "GitHub",
        style: "shadow-gray-600",
      },
  ];
  
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline p-2">
            Experience
          </p>
          <p className="py-6">
          These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 py-8 sm:px-0">
          {links.map(({ id, src, style, title }) => (
            <div key={id} className={`${'shadow-md hover:scale-105 duration-500 py-2 rounded-lg'} ${style}`}>
              <img src={src} alt="tech" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
