import Image from 'next/image'
import Link from 'next/link'

import {BiMailSend} from 'react-icons/bi'
const about = () => {
  return (
    <div className="flex flex-col container max-w-5xl md:mx-auto px-2 md:px-0">
      <div className=" grid md:grid-cols-2 gap-3">
        <div className="my-5 h-full flex flex-col justify-center ">
        <h2 className="font-archivo text-itaGreen font-semibold border-b-itaGreen border-b">O Agenciji</h2>
          <div className="text-itaGgray my-4 text-sm font-normal text-justify">
          <p className="py-1"><span className="text-itaGreen">ICE – Agencija za promociju spoljne trgovine i internacionalizaciju italijanskih preduzeća</span> je vladina ustanova preko
            koje Vlada Italije podržava konsolidaciju i trgovinsko-ekonomski razvoj italijanskih firmi na inostranim tržištima. 
            Agencija deluje i kao subjekat ovlašćen da promoviše privlačenje stranih investicija u Italiju. 
          </p>
          <p className="py-1">Kao dinamična, moderna organizacija, uz podršku razgranate mreže kancelarija u inostranstvu, ICE vrši aktivnosti informisanja,
             podrške, konsaltinga, promocije i obuke za mala i srednja italijanska preduzeća. Zahvaljujući upotrebi 
             najsavremenijih instrumenata promocije i višestrukih kanala komunikacije, ICE radi na 
             afirmisanju izuzetnih proizvoda i usluga <span className="text-itaGreen">Made in Italy</span> u svetu.
          </p>
          <p className="py-1">Detaljnije informacije su dostupne na matičnom sajtu Agencije:  
            <Link href="http://www.ice.it" passHref>
              <a className="text-itaGreen hover:text-itaGray hover:underline-offset-2 transition-colors duration-500"> www.ice.it</a>
            </Link>
          </p>

          </div>
          <h2 className="font-archivo text-itaGreen font-semibold border-b-itaGreen border-b p-1">Kontakt</h2>
          <div className="text-itaGgray my-4 text-sm font-normal">
           
            <p>Adresa: Kneza Miloša 56, 11000 Beograd</p>
            <p>Telefon: +381 11 362-9939</p>
            <p>Email: belgrado@ice.it</p>
            <p>Sajt Agencije: www.ice.it</p>
          </div>
        </div>
      
        <div className="w-full md:max-w-full mx-auto p-4 shadow-lg">
        <Image src={'/palazzo-italia.jpg'}
                    className="w-full"
                    alt={"Palazzo Italia"}
                    width={1140}
                    height={887}
                  
                     />
               <h2 className="font-archivo text-itaRed font-semibold border-b-itaGreen border-b">Palata Italija, Kneza Miloša 56, Beograd</h2>        
        </div>        
      </div>
    </div>
  )
}

export default about