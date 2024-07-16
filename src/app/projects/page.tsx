import React from 'react'
import { Metadata } from "next";
import Projects from "@/components/projects/Projects";

export const metadata: Metadata = {
  title: "Najib Abdi - Projects",
  description: "Projects Najib Abdi has worked on",
};

const projects = () => {
  return (
    <div>
      <Projects />
    </div>
  )
}

export default projects