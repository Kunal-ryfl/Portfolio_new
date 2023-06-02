"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Fira_Code } from "next/font/google";
import { motion, useAnimate,stagger, usePresence } from "framer-motion";

const font = Fira_Code({ subsets: ["latin"] });

// export const metadata = {
//   title: "Kunal | Projects",
//   description: "",
// };

let projects = [
  {
    name: "SIGMA",
    link: "https://sigma-shop.vercel.app/",
    des: "Ecommerce app built using Nextjs and Sanity.io ",
  },
  {
    name: "T3 Chat App",
    link: "https://chat-app-git-main-kunalsharma070806-gmailcom.vercel.app/",
    des: "Chat app developed on T3 Stack ",
  },
  {
    name: "Movie Catalogue",
    link: "https://cool-sopapillas-434437.netlify.app/",
    des: "Movie catalgue to search 10000+ movies",
  },
  { name: "Portfolio", link: "/", des: "My bio and work" },
];
const Projects = () => {
  const [isPresent, safeToRemove] = usePresence();

  const [scope, animate] = useAnimate();

  useEffect(() => {
    // This "li" selector will only select children
    // of the element that receives `scope`.
    // animate("h1", { opacity: 1 });
    // animate("h1", { opacity: [0,1] },{ delay:stagger(0.2,{ ease: p => Math.sin(p) }) });
    if (isPresent) {
      const enterAnimation = async () => {
    animate("h1", { opacity: [0,1] },{ delay:stagger(0.2,{ ease: p => Math.sin(p) }) });
    // await animate("li", { opacity: 1, x: 0 })
      }
      enterAnimation()

    } else {
      const exitAnimation = async () => {
    animate("h1", { opacity: [1,0] },{ delay:stagger(0.2,{ ease: p => Math.sin(p) }) });
        safeToRemove()
      }
      
      exitAnimation()
    }
 }, [isPresent])

  

  return (
    <div>
      <h1 className="  text-4xl font-semibold">My Projects</h1>

      <div ref={scope}>
        {projects.map((x) => (
          <div key={x.name} className=" my-5">
            <h1>
              <Link href={x.link}>{x.name}</Link>
            </h1>

            <p className="text-sm text-neutral-500"> {x.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
