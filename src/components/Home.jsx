import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="animate-slideRotate bg-gradient-to-b to-gray-800 from-black text-white pt-24 md:pt-28" // Added pt-24 (or pt-28 for larger screens) to offset the fixed navbar
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full space-y-6 md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl animate-flip sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#08fdd8] to-[#ff4d4d]">
            I'm a MERN Stack Developer
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0">
            Hey!<span className="inline-block text-2xl animate-wave">👋</span> I am Devanshi, a passionate software developer. I specialize in building modern software using ReactJs, NodeJs, and creating highly functional and reusable UI components along with developing RESTful APIs.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white animate-flip w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="p-4"> {/* Added padding container */}
            <img
              src={HeroImage}
              alt="My Profile"
              className="rounded-2xl animate-float mx-auto w-[350px] h-[380px] object-cover shadow-xl shadow-[#08fdd8] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
