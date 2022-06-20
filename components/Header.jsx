import React from 'react'
import {useState, useEffect} from 'react'

import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

import Head from 'next/head'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Header = () => {

  const [open, setOpen] = useState(false)

  const toggleMobile = () => {
    setOpen(!open)
  }

  const router = useRouter()

  useEffect(()=>{
    setOpen(false)
  },[router.pathname])

  return (
 
  <header className="h-full flex flex-row justify-around">
    <Head>
      <title>ITA - Italijanska Agencija za Spoljnu Trgovinu, Kancelarija u Beogradu</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  <div className="flex md:flex-col flex-row justify-between container max-w-5xl md:mx-auto relative px-4  pt-2">
      <div className="flex flex-row justify-between items-center align-middle">
        <Link href="/" passHref><Image className="cursor-pointer" src="/logo1.png" height="90" width="150" alt="ITA logo" /></Link>
        <div className="hidden md:block">
          <Link href="/" passHref><h3 className="text-itaGray font-normal font-archivo px-2 my-2 cursor-pointer animate-pulse">
            Italijanska Agencija za Spoljnu Trgovinu, Beograd</h3>
          </Link>
          <div className="flex flex-row">
            <div className="bg-itaRed h-1 w-1 rounded-full translate-y-[-2px]"></div>
            <div className=" bg-itaLightGray h-[1px] w-full mx-1"></div>
            <div className="bg-itaGreen h-1 w-1 rounded-full translate-y-[-2px]"></div>
          </div>
        </div> 
      </div>


      <ul className="hidden md:flex flex-row text-itaGray space-x-3 h-full my-16 justify-evenly font-archivo uppercase mainMenu">
          <li className="hover:text-itaDarkGray"><Link href="/" passHref><a>Naslovna</a></Link></li>
          <li className="hover:text-itaDarkGray"><Link href="/events" passHref><a>Događaji</a></Link></li>    
          <li className="hover:text-itaDarkGray"><Link href="/articles" passHref>Novosti</Link></li>  
          <li className="hover:text-itaDarkGray"><Link href="/galleries" passHref>Galerije</Link></li>           
          <li className="hover:text-itaDarkGray"><Link href="/about" passHref>ITA@Beograd</Link></li>   
      </ul>

      <div className={open?"mobileMenu":"mobileMenu -translate-y-full"} onClick={()=>setOpen(false)}>
      <Link href="/" passHref><Image className="cursor-pointer" src="/negative.png" height="120" width="200" /></Link>  
        <ul className="flex flex-col w-3/4">
            <li className="mobileBtn"><Link href="/" passHref>Naslovna</Link></li>
            <li className="mobileBtn"><Link href="/events" passHref>Događaji</Link></li>    
            <li className= "mobileBtn"><Link href="/articles" passHref>Novosti</Link></li>
            <li className= "mobileBtn"><Link href="/galleries" passHref>Galerije</Link></li>                
            <li className="mobileBtn"><Link href="/about" passHref>ITA@Beograd</Link></li>   
        </ul>
      </div>
        <span className={open?"md:hidden flex z-50 text-itaWhite":"md:hidden flex z-50 text-itaGreen"} onClick={toggleMobile}>
        {open? <AiOutlineClose size={25} /> : <AiOutlineMenu  size={25} />}
        </span>
      
    </div>

 
  </header>

  )
}

export default Header