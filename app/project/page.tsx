import Link from "next/link";
import React from "react";
import clsx from "clsx";

export const metadata = {
  title: "Kunal | Projects",
  description: "",
};

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
  
  

  return (
    <div>
      <h1 className="  text-4xl font-semibold">My Projects</h1>

      <div >
        {projects.map((x) => (
          <div key={x.name} className=" my-5">
            <h1>
              <Link   className={clsx(
                      'transition-all font-semibold hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      
                    )}href={x.link}>{x.name}</Link>
            </h1>

            <p className="text-sm text-neutral-500"> {x.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
