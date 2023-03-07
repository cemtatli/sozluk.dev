import React from "react";
import Link from "next/link";
import Tooltip from "../tooltip";
import DarkMode from "../darkmode";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <>
      <Tooltip />
      <header className="sticky top-0 flex h-15 w-full items-center justify-center bg-ebony-900 px-4 py-2 md:py-6">
        <nav className="flex flex-auto items-center justify-center text-lg font-bold text-white">
          <svg
            mr-2
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.75}
            stroke="currentColor"
            className="mr-1.5 h-5 w-5  text-white md:h-6 md:w-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
          <Link href={"/"}>sözlük.dev</Link>
        </nav>
        <DarkMode />
      </header>
    </>
  );
}
