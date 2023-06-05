import React from "react";
import Image from 'next/image'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsArrowUpRight} from 'react-icons/bs'
import Link from 'next/link'
import * as motion from '../lib/motion'

export default function Home() {
  return (
    <motion.div   id="box"
    initial={{opacity:0,y:20}} 
    animate={{opacity:1,y:0}}
    exit={{opacity:0,y:0}}
    >
      <h1 className=' text-4xl font-semibold'>Kunal Bhardwaj</h1>
      <p className=' my-5 text-base'>Hi i&apos;m Kunal. A frontend web developer and coding lover.   </p>
      <Image src={"https://media.licdn.com/dms/image/C4D03AQEP7hT4dZFbpA/profile-displayphoto-shrink_400_400/0/1662795825093?e=1691020800&v=beta&t=oZQNf5ULdQkWcJ_7VxdrQ8AbUzfHbk6zpecdKjRsgJw"} 
      height={100} width={100} alt='dp'
      className=' animate-wiggle my-5 rounded-full border-neutral-500  border-2 filter grayscale '
      />
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
