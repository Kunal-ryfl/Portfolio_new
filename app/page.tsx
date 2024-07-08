import React from "react";
import Image from 'next/image'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsArrowUpRight} from 'react-icons/bs'
import Link from 'next/link'
import * as motion from '../lib/motion'
import { once } from "events";

export default function Home() {
  return (
    <motion.div   id="box"
    initial={{opacity:0,scale:0.9}} 
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0.9}}
    >
      <h1 className=' text-4xl font-semibold'>Kunal Bhardwaj</h1>
      <p className=' my-5 text-base'>Hi i&apos;m Kunal. A full stack web developer and coding lover.   </p>
      <motion.div className=" relative  rounded-full overflow-hidden aspect-square h-32 w-fit bg-white "
       initial={{x:-20,opacity:0}} 
       animate={{x:0,opacity:1}} 
       transition={{delay:0.5}}
       >

      <Image src={"https://utfs.io/f/5b7584fd-99f5-4b95-9492-50e6acc04481-c21c76.jpg"} 
       fill   style={{objectFit:'contain'}}  alt='dp'
      className='  border-neutral-500  border-2 filter  '
      />

      </motion.div>
      <p className=' my-5'>I&apos;m currently pursuing my bachelor&apos;s in computer science engineering from Panjab University. I was always fascinated about tech. My fascination has been my motivation to get into tech industry. </p>
    
    <div className=' grid gap-3   md:grid-cols-3'>
      <Link href={"https://www.linkedin.com/in/kunal-bhardwaj-b07b87217/"}>
      <div className=' border-2 rounded-md p-3 font-semibold flex  justify-center items-center gap-5  border-neutral-500 '><AiFillLinkedin/> Linkedin <BsArrowUpRight/> </div>
      </Link>
      <div className=' border-2 rounded-md p-3 flex font-semibold justify-center items-center gap-5  border-neutral-500 '><AiFillMail/> Mail Me <BsArrowUpRight/>  </div>
      <Link href={"https://github.com/Kunal-ryfl"}>
      <div className=' border-2 rounded-md p-3 flex font-semibold  justify-center items-center gap-5  border-neutral-500'><AiFillGithub/> Github <BsArrowUpRight/>  </div>
      </Link>
    </div>
    </motion.div>  )
}
