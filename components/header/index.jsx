import React from "react";
import Link from "next/link";
import Tooltip from "../tooltip";

export default function Header() {
  return (
    <>
      <Tooltip />
      <header className="sticky top-0 flex h-15 w-full items-center justify-center  bg-ebony-900 text-lg font-bold text-white">
        <Link href={"/"}>sözlük.dev</Link>
      </header>
    </>
  );
}
