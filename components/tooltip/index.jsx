import Link from "next/link";
import React from "react";
import { XMarkIcon, ArrowSmallRightIcon } from "@heroicons/react/24/solid";

export default function Tooltip() {
  return (
    <div className="tooltip group relative flex w-full flex-col items-start justify-center gap-2.5 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 px-4 py-3 md:py-4  text-ebony-900 sm:items-center md:flex-row md:gap-5">
      <span className="text-xs sm:text-sm">
        Açık kaynaklı projemize katkıda bulunmak isterseniz, GitHub üzerinden ulaşabilirsiniz.
      </span>
      <Link
        target="_blank"
        href="https://github.com/cemtatli/sozluk.dev"
      >
        <span aria-hidden='true' className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">Repo'ya git →</span>
      </Link>
      <XMarkIcon
        onClick={() => {
          document.querySelector(".tooltip").classList.toggle("hidden");
        }}
        aria-hidden="true"
        className="absolute right-2.5 bottom-2.5 h-4 w-4 shrink-0 cursor-pointer rounded-full text-gray-700 transition  duration-100  hover:scale-110 hover:text-gray-900 hover:ring-1 hover:ring-gray-900 hover:ring-offset-gray-900 md:bottom-4"
      />
      
    </div>


  );
}
