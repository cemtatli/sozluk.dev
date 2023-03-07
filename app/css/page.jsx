import React from 'react'
import Link from 'next/link'

export default function CSS() {
  return (
    
    <>
    <nav className="flex items-center justify-center my-3" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3 justify-center">
      <li className="inline-flex items-center">
        <Link href={'/'} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
          <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
          Ana Sayfa
        </Link>
      </li>
      <li>
        <div className="flex items-center">
          <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          <Link href={"/javascript"} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">CSS</Link>
        </div>
      </li>
    </ol>
    
  </nav>
    <div className="w-full flex items-center justify-center  bg-gradient-to-l font-medium text-sm lg:text-base capitalize from-sky-400 to-blue-500 px-4 py-2 text-white">CSS Terimleri</div>
  
    </>)
}
