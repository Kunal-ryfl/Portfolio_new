import React from 'react'
import {DiJava} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {TbBrandTailwind} from 'react-icons/tb'
import {AiFillHtml5} from 'react-icons/ai'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTypescript} from 'react-icons/si'
import {IoLogoCss3} from 'react-icons/io'
import * as motion from '../../lib/motion'

export const metadata = {
    title: 'Kunal | Skills',
    description: '',
  }
  
const Page = () => {
 

  return (
    <motion.div  className=' overflow-hidden'
    initial={{opacity:0,scale:0.9}} 
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0.9}}
    >
              <h1 className=' text-4xl font-semibold'>My Skills</h1>
              <p className=' my-5 text-base '> I have learn&apos;t Java, Javascript, Nextjs, HTML/CSS, Tailwind and Typescript</p>
              
              <div  className=' grid  grid-rows-2  '>
                
                <div   className=' flex my-5 w-full  justify-evenly'>

              <DiJava className=' animate-pulse text-5xl'/>
              <DiJavascript1 className=' animation-delay-500 animate-pulse text-5xl'/>
              <DiReact className=' animation-delay-1000 animate-pulse text-5xl'/>
              <TbBrandNextjs className=' animation-delay-1500 animate-pulse text-5xl'/>
                </div>
               <div className=' my-5 flex w-full  justify-evenly'>
              <AiFillHtml5 className=' animate-pulse text-5xl'/>
              <IoLogoCss3 className=' animation-delay-500 animate-pulse text-5xl'/>
              <SiTypescript className=' animation-delay-1000 animate-pulse text-4xl'/>
                </div> 
               <div className=' my-5 flex w-full  justify-evenly'>
              <TbBrandTailwind className=' animate-pulse text-5xl'/>
              
                </div> 
              </div>
    </motion.div>
  )
}

export default Page