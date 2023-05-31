import React from 'react'
import {DiJava} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {TbBrandTailwind} from 'react-icons/tb'
import {AiFillHtml5} from 'react-icons/ai'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTypescript} from 'react-icons/si'
import {IoLogoCss3} from 'react-icons/io'

export const metadata = {
    title: 'Kunal | Skills',
    description: '',
  }
  
const page = () => {
  return (
    <div  className=''>
              <h1 className=' text-4xl font-semibold'>My Skills</h1>
              <p className=' my-5 text-base '> I have learn't Java, Javascript, Nextjs, HTML/CSS, Tailwind and Typescript</p>
              
              <div className=' grid  grid-rows-2  '>
                
                <div className=' flex my-5 w-full  justify-evenly'>

              <DiJava className=' text-5xl'/>
              <DiJavascript1 className=' text-5xl'/>
              <DiReact className=' text-5xl'/>
              <TbBrandNextjs className=' text-5xl'/>
                </div>
               <div className=' my-5 flex w-full  justify-evenly'>
              <AiFillHtml5 className=' text-5xl'/>
              <IoLogoCss3 className=' text-5xl'/>
              <SiTypescript className=' text-4xl'/>
                </div> 
               <div className=' my-5 flex w-full  justify-evenly'>
              <TbBrandTailwind className=' text-5xl'/>
              
                </div> 
              </div>
    </div>
  )
}

export default page