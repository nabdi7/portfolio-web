import React from 'react'
import { Metadata } from "next";
import Research from "@/components/research/Research";

export const metadata: Metadata = {
  title: "Najib Abdi - Research",
  description: "Research on machine learning, algorithms, software development and more.",
};

const research = () => {
  return (
    <div>
      <Research />
    </div>
  )
}

export default research