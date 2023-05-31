"use client"
import Link from 'next/link'
import './globals.css'
import { usePathname } from 'next/navigation';
import {Fira_Sans} from 'next/font/google'
import {TbCoffee} from 'react-icons/tb'

const font = Fira_Sans({ subsets: ['latin'] ,weight:['400','700','200','600','900']});

export const metadata = {
  title: 'Kunal Bhardwaj',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})

{
 const path = usePathname()  
  return (
    <html lang="en" className={font.className} >
      <body className=' flex justify-center md:pt-36 min-h-screen    text-white  bg-neutral-900'>
        <div className= '  w-full max-w-5xl flex flex-col md:flex-row  '>         
         <div className=' flex md:block gap-4  p-4 '>
         
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

         <div className='  px-4     md:px-20 py-2'>
        {children}
         </div>
         
        </div>
        </body>
    </html>
  )
}
