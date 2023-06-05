import Link from "next/link";
import React from "react";
import clsx from "clsx";
import * as motion from '../../lib/motion'
import {BsArrowUpRight} from 'react-icons/bs'

export const metadata = {
  title: "Kunal | Projects",
  description: "",
};

let projects = [
  {
    name: "SIGMA",
    link: "https://sigma-shop.vercel.app/",
    des: "Ecommerce app built using Nextjs and Sanity.io ",
    skills:["sanity cms","nextjs","cart"]
  },
  {
    name: "T3 Chat App",
    link: "https://chat-app-git-main-kunalsharma070806-gmailcom.vercel.app/",
    des: "Chat app developed on T3 Stack ",
    skills:["T3 stack","social","login"]
  },
  {
    name: "Movie Catalog",
    link: "https://cool-sopapillas-434437.netlify.app/",
    des: "Movie catalog to search 10000+ movies",
    skills:["modal routing","search","categories"]
  },
  { name: "Portfolio",
    link: "/",
    des: "My bio and work",
    skills:["tailwind","nextjs 13"]
    
   },
];
const Projects = () => {
  
  
  return (
    <motion.div
    initial={{opacity:0,scale:0.9}} 
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0.9}}
    >
      <h1 className="  text-4xl font-semibold">My Projects</h1>

      <div >
        {projects.map((x) => (
          <div key={x.name} className=" my-5">
            <h1>
              <Link   className={clsx(
                      'transition-all  font-semibold hover:text-neutral-800 dark:hover:text-neutral-200 flex gap-2 items-baseline ',
                      
                    )}href={x.link}>{x.name} <BsArrowUpRight className=" text-[12px]"/> </Link>
            </h1>

            <p className="text-sm text-neutral-500"> {x.des}</p>
            <div className=" my-2 flex gap-2 flex-wrap ">
            {x.skills?.map((item)=>(
              <div key={item} className=" bg-neutral-800 px-[6px] py-[2px] text-ne border-[1px] rounded-md">
               <p className=" text-[12px]">{item}</p>
                </div>
              ))}
              </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
