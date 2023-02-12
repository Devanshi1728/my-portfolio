import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen 
      text-white p-4"
    >
      <div className="flex flex-col justify-center p-4 h-full max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            method="POST"
            action="https://getform.io/f/31e3b0bf-a728-4b97-862e-ef334b86de80"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <button
              className="bg-gradient-to-b from-cyan-400 to-blue-500 px-6 py-3 my-8 text-white 
                        rounded-md flex items-center mx-auto hover:scale-105 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      <div className="text-center">
        <p>Made with <span className="text-red-500 text-2xl"> ♥ </span> by Devanshi</p>
      </div>
      </div>
    </div>
  );
};

export default Contact;
