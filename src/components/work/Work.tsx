"use client";
import React, { useState } from "react";
import workData from "./index";

const Work = () => {
  const [selectedCompany, setSelectedCompany] = useState(workData[0]);

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-col max-w-4xl mx-auto ">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <p className="text-gray-400 mt-2">
        Here are some highlights from my professional journey.
        </p>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="flex md:flex-col flex-wrap md:space-y-4 space-x-2 md:space-x-0  gap-3 md:gap-3">
            {workData.map((job) => (
              <button
                key={job.id}
                className={`flex items-center p-2 rounded-lg  md:min-w-[220px] ${
                  selectedCompany.id === job.id
                    ? "bg-gray-500 text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setSelectedCompany(job)}
              >
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="w-6 h-6 md:w-10 md:h-10 mr-2 md:mr-4"
                />
                <span className="text-sm md:text-lg font-semibold">{job.company}</span>
              </button>
            ))}
          </div>
          <div className="mt-4 md:mt-0 md:ml-8">
            <h4 className="text-xl md:text-2xl font-medium">
              {selectedCompany.title}{" "}
              <span className="text-blue-500">@ {selectedCompany.company}</span>
            </h4>
            <p className="text-gray-400">{selectedCompany.date}</p>
            <p className="text-gray-400">{selectedCompany.location}</p>
            <ul className="list-disc list-inside mt-2">
              {selectedCompany.description.map((desc, i) => (
                <li key={i} className="mt-1">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
