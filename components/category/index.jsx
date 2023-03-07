import React from "react";
import Link from "next/link";


export default function Category() {
  return (
    <div className="flex items-center justify-center gap-2.5 px-4 py-2 md:gap-5 flex-wrap my-4 sm:flex-nowrap flex-col sm:flex-row w-full">
      <Link
        href={"/html"}
        className="flex h-10 w-full items-center justify-center rounded-full bg-gradient-to-l font-medium text-sm lg:text-base  from-orange-400 to-orange-500 px-3 py-1 text-white transition-all duration-75 hover:shadow-md hover:ring-2 hover:ring-orange-600 sm:w-40"
      >
        HTML
       
      </Link>
      <Link
        href={"/css"}
        className="flex lg:text-base  h-10 w-full items-center justify-center rounded-full bg-gradient-to-l font-medium text-sm  from-sky-400 to-blue-500 px-3 py-1 text-white  transition-all duration-75 hover:shadow-md hover:ring-2 hover:ring-blue-600 sm:w-40"
      >
        CSS
       
      </Link>
      <Link
        href={"/javascript"}
        className="h-10 lg:text-base w-full flex items-center justify-center rounded-full bg-gradient-to-l font-medium text-sm  from-bright-sun-400 to-bright-sun-500 px-3 py-1 text-white  transition-all duration-75 hover:shadow-md hover:ring-2 hover:ring-bright-sun-600 sm:w-40"
      >
        JavaScript

      </Link>
      <Link
        href={"/react"}
        className="flex lg:text-base h-10 w-full items-center justify-center rounded-full bg-gradient-to-l font-medium text-sm  from-ebony-400 to-ebony-500 px-3 py-1 text-white  transition-all duration-75 hover:shadow-md hover:ring-2 hover:ring-ebony-600 sm:w-40"
      >
        React JS

      </Link>
      <Link
        href={"/nextjs"}
        className="flex lg:text-base h-10 w-full items-center justify-center rounded-full bg-gradient-to-l font-medium text-sm  from-slate-400 to-slate-500 px-3 py-1 text-white  transition-all duration-75 hover:shadow-md hover:ring-2 hover:ring-slate-600 sm:w-40"
      >
        Next JS
     
      </Link>
      <Link
        href={"/git"}
        className="flex lg:text-base h-10 w-full items-center justify-center rounded-full bg-gradient-to-l font-medium text-sm  from-flamingo-400 to-flamingo-500 px-3 py-1 text-white  transition-all duration-75 hover:shadow-md hover:ring-2 hover:ring-flamingo-600 sm:w-40"
      >
        Git
      </Link>

    </div>
  );
}
