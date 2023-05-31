"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const path = usePathname()  
  return (
    <div className=' flex md:block gap-4  p-4'>
         <Link href={'/'}>
          <h1 className={path === '/'?' transition duration-150 ease-in-out bg-neutral-700 p-2 rounded-sm ':' p-2 transition duration-150 ease-in-out  text-neutral-400' } >Home</h1>
          </Link>
          <Link href={'/project'}>
          <h1 className={path === '/project'?' transition duration-150 ease-in-out bg-neutral-700  p-2 rounded-sm ':' p-2 transition duration-150 ease-in-out text-neutral-400' } >Projects</h1>
          </Link>
          <Link href={'/skills'}>
          <h1 className={path === '/skills'?' transition duration-150 ease-in-out  bg-neutral-700  p-2 rounded-sm ':' p-2 transition duration-150 ease-in-out text-neutral-400' } >Skills</h1>
          </Link>
          
    </div>
  )
}

export default Sidebar