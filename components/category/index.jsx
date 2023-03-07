import React from "react";
import Link from "next/link";


export default function Category() {
  return (
    <div className="flex items-center justify-center gap-2.5 px-4 py-2 md:gap-5 flex-wrap my-4 sm:flex-nowrap flex-col sm:flex-row w-full">
    <Link href={'/html'} class="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center w-full sm:w-40">HTML</Link>
    <Link href={'/css'} class="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center w-full sm:w-40">CSS</Link>
    <Link href={'/javascript'} class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center w-full sm:w-40">JavaScript</Link>
    <Link href={'/'} class="text-white bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:indigo-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center w-full sm:w-40">React</Link>
    <Link href={'/'} class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center w-full sm:w-40">Vue JS</Link>
    <Link href={'/'} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center flex items-center justify-center w-full sm:w-40">Git</Link>
    </div>
  );
}
