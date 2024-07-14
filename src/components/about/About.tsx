import React from "react";
import Image from "next/image";
import Work from "../work/Work";

const About = () => {
  return (
    <>
      <div className="custom-screen p-8">
        <div className="flex flex-col md:flex-row max-w-3xl mx-auto space-y-8 md:space-y-0 md:space-x-10">
          <div className="md:w-1/3">
            <Image
              src="/najka.jpg"
              alt="Profile Photo"
              width={500}
              height={200}
              className="rounded-lg w-full "
            />
          </div>

          <div className="md:w-2/4 space-y-4">
            <p>
              Hey, I&apos;m <span className="text-blue-500">Najib Abdi</span>. I am a Software Engineer and a Master&apos;s
              student in Computer Science at{" "}
              <a
                href="https://www.gatech.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Georgia Tech University
              </a>
              , specializing in Machine Learning.
            </p>
            <p>
              My primary objective is to develop functional software solutions.
              I&apos;m passionate about Machine Learning, and Full-Stack
              development.
            </p>
            <p>
              I attained a BS at the{" "}
              <a
                href="https://www.washington.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                University of Washington
              </a>{" "}
              in Computer Science and a minor in Business Administration.
            </p>
            <p>
              I have hands-on experience in full-stack web and mobile app
              development, as well as machine learning with a variety of
              programming languages and frameworks.
            </p>
            <p>
              I have a passion for learning new libraries, languages, and
              frameworks, embracing challenges in software engineering. I enjoy
              solving complex problems, both independently and collaboratively.
            </p>
          </div>
        </div>
      </div>
      <Work />
    </>
  );
};

export default About;
