import React from "react";
import Link from "next/link";
import { RiTwitterFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex h-12 w-full items-center justify-center gap-2.5 bg-ebony-900 px-4 py-2 text-white  md:gap-5">
      <Link href={"/"} className="text-xs" aria-hidden={"true"}>
        © 2023 sözlük.dev
      </Link>
      <Link target={"_blank"} href={"https://twitter.com/vaycem"}>
        <RiTwitterFill className="duration- h-5 w-5 transition delay-75 hover:text-azure-400" />
      </Link>
    </footer>
  );
}
