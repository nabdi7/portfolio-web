"use client";
import React, { useState } from "react";
import { projects } from "./projectData";
import Image from "next/image";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="custom-screen">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-col mx-auto ">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-md text-gray-400 mt-2">
            Here are some of the projects I have worked on
          </p>
        </div>
        {/* select options for projects */}
        <div className="mt-4 flex flex-wrap gap-2 md:gap-4">
          {[
            "All",
            "Web development",
            "App development",
            "Machine learning",
            // "Ui design",
            // "Animations",
          ].map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded-lg ${
                selectedCategory === category
                  ? "bg-gray-500 text-white"
                  : "bg-gray-100 text-gray-700" 
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* projects */}
        <div className="pt-5">
          {filteredProjects.map((project, index) => (
            <div key={index} className="mb-2 mt-2">
              <div className="bg-white rounded-lg overflow-hidden">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
              <div className="mt-4 lg:py-10 py-5 rounded-lg border-border border-b">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-2 flex items-center space-x-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View site
                  </a>
                  <span className="border-l border-gray-400 h-5"></span>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Source code
                  </a>
                </div>
                <div className="flex flex-wrap space-x-2 mt-4">
                  {project.tag.map((tag, idx) => (
                    <div key={idx} className="flex items-center space-x-1 mt-2">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg flex items-center">
                        <Image src={tag.icon} alt={""} width="14" height="14" />
                        <span className="ml-2 text-sm">{tag.name}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
