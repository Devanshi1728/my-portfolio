import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      href: "https://www.linkedin.com/feed/",
      style: "rounded-tr-md",
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
    },
    {
      id: 2,
      href: "https://github.com/Devanshi1728",
      child: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
    },
    {
      id: 3,
      href: "mailto: definejarushi@gmail.com",
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
    },
    {
      id: 4,
      href: "/Devanshi's_Resume.pdf",
      style: "rounded-br-md",
      download: true,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, href, child, style, download }) => (
          <li
            key={id}
            className={`${"bg-gray-500 flex justify-between items-center h-14 py-4 px-4 w-40 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-300"} ${style}`}
          >
            <a
              className="justify-between flex items-center w-full text-white"
              href={href}
              target="_blank"
              rel="noreferrer"
              download={download}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
