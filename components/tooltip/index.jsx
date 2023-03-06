"use client";

import Link from "next/link";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Tooltip() {
  return (
    <div className="tooltip group relative flex w-full flex-col items-start justify-center gap-2.5 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 px-4 py-2 text-sm text-ebony-900 sm:items-center md:flex-row md:gap-5">
      <span>
        Açık kaynaklı projemize katkıda bulunmak isterseniz, GitHub üzerinden ulaşabilirsiniz.
      </span>
      <Link
        target="_blank"
        href="https://github.com/cemtatli"
        class="group flex-none rounded-full bg-ebony-900 py-1 px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        Repo'ya git
        <span aria-hidden="true" className="ml-0.5">
          →
        </span>
      </Link>
      <XMarkIcon
        onClick={() => {
          document.querySelector(".tooltip").classList.toggle("hidden");
        }}
        aria-hidden="true"
        className="absolute right-2.5 bottom-2 h-4.5 w-4.5 shrink-0 cursor-pointer rounded-full text-gray-700 transition  duration-100  hover:scale-110 hover:text-gray-900 hover:ring-1 hover:ring-gray-900 hover:ring-offset-gray-900 sm:bottom-3.5"
      />
    </div>
  );
}
