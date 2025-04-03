import React from "react";
import TodoList from "../assets/portfolio/TodoList.png";
import reactWeather from "../assets/portfolio/WeatherApp.png";
import expenseManagement from "../assets/portfolio/ExpenseManagement.png";
import chatGPT from "../assets/portfolio/chatGPTClone2.png";
import ecommerce from "../assets/portfolio/Ecommerce-fashion2.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 0,
      src: TodoList,
      href: "https://github.com/Devanshi1728/ToDoList",
    },
    {
      id: 1,
      src: reactWeather,
      href: "https://github.com/Devanshi1728/WeatherApp",
    },
    {
      id: 2,
      src: expenseManagement,
      href: "https://github.com/Devanshi1728/expenseManagement-MERN",
    },
    {
      id: 3,
      src: chatGPT,
      href: "https://github.com/Devanshi1728/chatGPT",
    },
    {
      id: 4,
      src: ecommerce,
      href: "https://github.com/Devanshi1728/mernEcommerceProject",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="text-center pb-8">
          <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#08fdd8] to-[#ff4d4d]">
            My Portfolio
          </p>
          <div className="w-20 h-1 bg-[#08fdd8] mx-auto mt-4"></div>
          <p className="py-6 text-xl text-gray-400">
            Check out some of my projects right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ src, href, id }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg bg-gray-900 overflow-hidden"
            >
              <img
                src={src}
                alt="portfolio"
                className="rounded-md duration-300 hover:scale-105 transition-transform"
                height="164px"
                width="320px"
              />
              <div className="flex justify-center items-center p-4">
                <a
                  className="px-6 py-3 bg-[#08fdd8] text-white rounded-md text-center hover:bg-[#ff4d4d] transition duration-300"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
