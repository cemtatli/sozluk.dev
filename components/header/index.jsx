import React from "react";
import Link from "next/link";
import Tooltip from "../tooltip";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <>
      <Tooltip />
      <header className="sticky top-0 flex h-15 w-full items-center justify-center  bg-ebony-900 ">
        <nav className="flex items-center justify-center text-lg font-bold text-white">
          <CodeBracketIcon className="mr-1.5 h-6 w-6 " />
          <Link href={"/"}>sözlük.dev</Link>
        </nav>
      </header>
    </>
  );
}
