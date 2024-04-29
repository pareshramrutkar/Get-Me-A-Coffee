"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false);
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }
  return (
    <nav className='bg-blue-950 text-white flex justify-between items-center px-4 py-2 flex-col md:flex-row'>
      <Link href={"/"} className='logo font-bold flex items-center gap-2 justify-center'>
        <img src='/cupcoffee.gif' width={34} alt='' />
        <span className="text-2xl md:text-base my-2 md:my-0">Getmeacoffee!</span>
      </Link>
      {/* <ul className='flex justify-between items-center gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>SignUp</li>
            <li>Login</li>
        </ul> */}
      <div className="relative flex flex-col md:block gap-4">
          {session && <>
    <button onClick={()=>setshowdropdown(!showdropdown)} onBlur={()=> {setTimeout(()=>{
      setshowdropdown(false)
    }, 300); }} 
    id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className=" mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
    </svg>
    </button>
        <div id="dropdownDelay" className={`absolute left-[155px] my-2 z-10 ${showdropdown?"":"hidden"} bg-gray-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-7001`}>
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
            <li>
              <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white">Dashboard</Link>
            </li>
            <li>
              <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white">Your page</Link>
            </li>
            
            <li>
              <Link onClick={()=>{signOut()}} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white">Logout</Link>
            </li>
          </ul>
        </div>
        </> }

        {session &&
          <button class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative md:px-5 px-36 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={() => { signOut() }}>
              Logout
            </span>
          </button>}

        {!session && <Link href={"/login"}>
          <button class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Login
            </span>
          </button></Link>}
      </div>
    </nav>
  )
}

export default Navbar
