import React from "react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="pt-10">
      {/* contact me */}
      <div className="flex justify-center space-x-8 mt-6">
        <a
          href="https://github.com/nabdi7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <Icons name="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/najib-abdi/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-300"
        >
          <Icons name="linkedin" />
        </a>
        <a
          href="https://www.instagram.com/najibabdi7/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-300"
        >
          <Icons name="instagram" />
        </a>
        <a href="mailto:abdinajka@gmail.com" className="hover:text-gray-300">
          <Icons name="email" />
        </a>
      </div>
      <div className=" py-10 text-center text-sm">
        <p>{new Date().getFullYear()} © Najib Abdi.</p>
      </div>
    </footer>
  );
};

export default Footer;
