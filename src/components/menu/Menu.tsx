"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close the menu if clicking outside of it
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <div className="" ref={menuRef}>
      <button
        onClick={open ? closeMenu : toggleMenu}
        className="text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute left-0 w-full flex flex-col mt-2  bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="flex flex-col p-2">
            <Link
              href="/"
              className="text-gray-800 hover:text-primary py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-800 hover:text-primary py-2"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/research"
              className="text-gray-800 hover:text-primary py-2"
              onClick={toggleMenu}
            >
              Research
            </Link>
            <Link
              href="/blog"
              className="text-gray-800 hover:text-primary py-2"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
