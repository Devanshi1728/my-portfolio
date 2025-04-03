import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center h-full">
        {/* Heading Section */}
        <div className="text-center pb-8">
          <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#08fdd8] to-[#ff4d4d]">
            Contact Me
          </p>
          <div className="w-20 h-1 bg-[#08fdd8] mx-auto mt-4"></div>
          <p className="py-6 text-xl text-gray-400">
            Submit the form below to get in touch with me
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center items-center">
          <form
            method="POST"
            action="https://getform.io/f/31e3b0bf-a728-4b97-862e-ef334b86de80"
            className="flex flex-col w-full md:w-1/2 space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#08fdd8] transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#08fdd8] transition-all"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#08fdd8] transition-all"
            />
            <button
              type="submit"
              className="bg-gradient-to-b from-cyan-400 to-blue-500 px-6 py-3 text-white rounded-md mx-auto hover:scale-105 transition-transform duration-300"
            >
              Let's Talk
            </button>
          </form>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-400">
            Made with <span className="text-red-500 text-2xl"> ♥ </span> by Devanshi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
