import React from 'react'
import { Metadata } from "next";
import Blogs from "@/components/blogs/Blogs";

export const metadata: Metadata = {
  title: "Najib Abdi - Blogs",
  description: "Blog articles on software development, web development, mobile app development, science and more.",
};

const page = () => {
  return (
    <div>
      <Blogs />
    </div>
  )
}

export default page