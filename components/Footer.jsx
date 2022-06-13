import React from 'react'

const Footer = () => {
  return (
   
    <footer className=" bg-itaGreen py-6 my-0 text-xs md:text-sm px-2 md:px-0">
      <div className="mx-auto container max-w-5xl flex flex-row items-stretch justify-between">
      <img className="h-24" src="/negative.png" />
      <div className="h-16 mx-5 font-sans font-light  text-sm text-itaWhite">
        <div className="border-b-2 border-itaWhite font-medium">Italijanska Agencija za Spoljnu Trgovinu</div>
        <div>Kneza Miloša 56, 11000  BEOGRAD</div>
        <div>Tel: 0038111/3629939
          Fax: 0038111/3672458
          
        </div>
        <div>E-mail: belgrado@ice.it - web: www.ice.it</div>   
        
        </div>

        </div>
    
  </footer>
  
  )
}

export default Footer