import React from 'react'
import {useState, useEffect} from 'react'

import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';
import {AiOutlineMenu} from 'react-icons/ai'

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
 
  <header className="h-full">
  <div className="flex flex-row justify-between items-center container max-w-5xl md:mx-auto relative px-4 md:px-0 pt-2">
      <div className="flex flex-col justify-between items-start">
        <Link href="/" passHref><Image className="cursor-pointer" src="/logo1.png" height="60" width="100" /></Link>  
        <Link href="/" passHref><h3 className="text-itaGray font-normal font-archivo ml-0">Italijanska Agencija za Spoljnu Trgovinu, Beograd</h3></Link>      
      </div>


      <ul className="hidden md:flex flex-row text-itaLightGray space-x-3 h-full justify-end font-archivo">
          <li className="hover:text-itaDarkGray"><Link href="/">Naslovna</Link></li>
          <li className="hover:text-itaDarkGray"><Link href="/events" activeClassName="text-itaRed">Događaji</Link></li>    
          <li className="hover:text-itaDarkGray"><Link href="/articles">Novosti</Link></li>           
          <li className="hover:text-itaDarkGray"><Link href="/about">ITA@Beograd</Link></li>   
      </ul>

      <div className={open?"mobileMenu":"mobileMenu -translate-y-full"}>
      <Link href="/" passHref><Image className="cursor-pointer" src="/negative.png" height="60" width="100" /></Link>  
        <ul className="flex flex-col w-3/4">
            <li className="mobileBtn"><Link href="/" passHref>Naslovna</Link></li>
            <li className="mobileBtn"><Link href="/events" activeClassName="text-itaRed">Događaji</Link></li>    
            <li className= "mobileBtn"><Link href="/articles">Novosti</Link></li>           
            <li className="mobileBtn"><Link href="/about">ITA@Beograd</Link></li>   
        </ul>
      </div>
      <AiOutlineMenu className={open?"md:hidden flex z-50 text-itaWhite":"md:hidden flex z-50 text-itaGreen"} onClick={toggleMobile} size={25} />
  </div>
  
 
  </header>

  )
}

export default Header