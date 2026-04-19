import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ img, title, liveLink, githubLink, desc }) => {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">{desc}</p>

        <div className="flex gap-4 mt-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition"
          >
            <FiExternalLink />
            Live
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900 transition"
          >
            <FaGithub />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
