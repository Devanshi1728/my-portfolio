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
      id: 3,
      src: ecommerce,
      href: "https://github.com/Devanshi1728/mernEcommerceProject",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl border-b border-gray-800 font-bold inline ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ src, href, id }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="portfolio"
                className="rounded-md duration-200 hover:scale-105"
                height="164px"
                width="320px"
              />
              <div className="flex item-center justify-center">
                <a
                  className="w-1/2 px-3 py-3 m-4 duration-200 hover:scale-105 text-center"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
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
