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



  return (
 
  <header className="h-full flex flex-row justify-around">
    <Head>
      <title>ITA - Italijanska Agencija za Spoljnu Trgovinu, Kancelarija u Beogradu</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  <div className="flex md:flex-col flex-row justify-between container max-w-5xl md:mx-auto relative px-4  pt-2">
      <div className="flex flex-row justify-between items-center align-middle">
        <Link href="/" passHref><a><Image className="cursor-pointer" src="/logo1.png" height="102" width="167" alt="ITA logo" priority /></a></Link>
        <div className="hidden md:block">
          <Link href="/" passHref><a><h3 className="text-itaGray font-normal font-archivo px-2 my-2 cursor-pointer animate-pulse">
            Italijanska Agencija za Spoljnu Trgovinu, Beograd</h3></a>
          </Link>
          <div className="flex flex-row">
            <div className="bg-itaRed h-1 w-1 rounded-full translate-y-[-2px]"></div>
            <div className=" bg-itaLightGray h-[1px] w-full mx-1"></div>
            <div className="bg-itaGreen h-1 w-1 rounded-full translate-y-[-2px]"></div>
          </div>
        </div> 
      </div>


      <ul className="hidden md:flex flex-row text-itaGray space-x-3 h-full my-16 justify-between font-archivo uppercase mainMenu">

          <Link href="/events" passHref><li className="hover:text-itaDarkGray cursor-pointer"><a>Događaji</a></li></Link>  
          <Link href="/articles" passHref><li className="hover:text-itaDarkGray"><a>Novosti</a></li></Link> 
          <Link href="/galleries" passHref><li className="hover:text-itaDarkGray"><a>Galerije</a></li></Link>
          <Link href="/video" passHref><li className="hover:text-itaDarkGray"><a>Video</a></li></Link> 
          <Link href="/clipping" passHref><li className="hover:text-itaDarkGray"><a>Mediji</a></li></Link>  
          <Link href="/italiano" passHref><li className="hover:text-itaRed"><a className=" text-itaRed font-semibold">Italiano</a></li></Link>              
          <Link href="/about" passHref><li className="hover:text-itaDarkGray"><a>ITA@Beograd</a></li></Link>  
      </ul>

      <div className={open?"mobileMenu":"mobileMenu -translate-y-full"} onClick={()=>setOpen(false)}>
      <Link href="/" passHref><a><Image className="cursor-pointer" src="/negative.png" height="120" width="200" priority /></a></Link>  
        <ul className="flex flex-col w-3/4">
      
            <Link href="/events" passHref><li className="mobileBtn"><a>Događaji</a></li></Link>    
            <Link href="/articles" passHref><li className= "mobileBtn"><a>Novosti</a></li></Link>
            <Link href="/galleries" passHref><li className= "mobileBtn"><a>Galerije</a></li></Link>
            <Link href="/video" passHref><li className= "mobileBtn"><a>Video</a></li></Link>   
            <Link href="/clipping" passHref><li className= "mobileBtn"><a>Mediji</a></li></Link>  
            <Link href="/italiano" passHref><li className= "mobileBtn"><a>Italiano</a></li></Link>               
            <Link href="/about" passHref><li className="mobileBtn"><a>ITA@Beograd</a></li></Link>   
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