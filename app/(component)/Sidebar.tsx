"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import {motion,LayoutGroup} from 'framer-motion'
import clsx from 'clsx';

const navItems = {
  '/': {
    name: 'home',
  },
  '/project': {
    name: 'projects',
  },
  '/skills': {
    name: 'skills',
  },
  
};
const Sidebar = () => {
    const pathname = usePathname()  
  return (
      <LayoutGroup>
    <div className= ' flex md:block gap-4  p-4' >

          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <div className="relative  py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-800 rounded-md z-[-1]"
                          layoutId="nav"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                          />
                          ) : null}
                    </div>
                  </Link>
                );
              })}
</div>
              </LayoutGroup>
    
  )
}

export default Sidebar