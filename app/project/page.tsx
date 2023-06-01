import Link from 'next/link'
import React from 'react'
import {Fira_Code} from 'next/font/google'
const font = Fira_Code({ subsets: ['latin'] });

export const metadata = {
    title: 'Kunal | Projects',
    description: '',
  }
  
  let projects = [
    {name:"SIGMA",link:"https://sigma-shop.vercel.app/",des:"Ecommerce app built using Nextjs and Sanity.io "},
    {name:"T3 Chat App",link:"https://chat-app-git-main-kunalsharma070806-gmailcom.vercel.app/",des:"Chat app developed on T3 Stack "},
    {name:"Movie Catalogue",link:"https://cool-sopapillas-434437.netlify.app/",des:"Movie catalgue to search 10000+ movies"},
    {name:"Portfolio",link:"/",des:"My bio and work"},
  ]
const page = () => {
  return (
    <div>
              <h1 className='  text-4xl font-semibold'>My Projects</h1>
              
              {
                projects.map((x)=>(
               <div key={x.name} className=' my-5'>
                <Link href={x.link}>
                <h1 >{x.name}</h1>
                </Link>
                <p className='text-sm text-neutral-500'>{x.des}</p>
               </div>

                ))
              }


    </div>
  )
}


export default page