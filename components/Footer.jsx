import React from 'react'
import {ImLinkedin, ImYoutube, ImInstagram, ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
   <footer>
    <div  className="bg-[#f4f4f5]">
    <div className="flex md:flex-col flex-row justify-between container max-w-5xl md:mx-auto min-h-[200px] text-sm px-2">
      <div className="py-5">
        <div>
          <p className="font-bold text-lg text-ddarkGray">Kancelarija Agencije ITA u Beogradu</p>
          <span className="text-[#4968b0] my-2">belgrado@ice.it</span>
          <div className="flex flex-row py-3">
              <div className="bg-itaRed h-1 w-1 rounded-full translate-y-[-2px]"></div>
              <div className=" bg-itaGgray h-[1px] w-full mx-1"></div>
              <div className="bg-itaGreen h-1 w-1 rounded-full translate-y-[-2px]"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between ">
          <div className="text-[#4968b0]">www.ice.it</div>
          <div className="flex flex-col justify-between items-end">
            <p className="my-3">Pratite nas:</p>
            <div className="flex flex-row justify-evenly space-x-3">              
              <ImYoutube size={25} />
              <ImTwitter size={25} /> 
              <ImLinkedin size={25} />
              <ImInstagram size={25} />
            </div>
          </div>
        </div>
      </div>
 
      </div>
    </div>
    <div className="bg-itaWhite flex flex-col justify-between container max-w-5xl md:mx-auto text-xs px-2 py-5">
      <p className="m-1">Copyright © ICE - Agenzia per la promozione all&apos;estero e l&apos;internazionalizzazione delle imprese italiane, All rights reserved.</p>
      <p className="m-1">Ricevi questa e-mail poiché ti sei iscritto personalmente, o per conto della tua azienda/organizzazione, nella mailing list 
        della Newsletter dell&apos;ICE Agenzia. I dati vengono forniti ad una società terza, incaricata del trattamento dei dati personali
         ad uso tecnico.
      </p>
      <p className="m-1">Per cancellarsi dalla Newsletter, cliccare su: Cancellami</p>
    </div>
    </footer>
  
  )
}

export default Footer