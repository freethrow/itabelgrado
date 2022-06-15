import Image from 'next/image'

import {BiMailSend} from 'react-icons/bi'
const about = () => {
  return (
    <div className="flex flex-col container max-w-5xl md:mx-auto px-2 md:px-0">
      <div className=" grid md: grid-cols-2 gap-3">
        <div className="my-5 h-full flex flex-col justify-center ">
        <h2 className="font-archivo text-itaGreen font-semibold border-b-itaGreen border-b">O Agenciji</h2>
          <div className="text-itaGgray my-4 text-sm font-normal">Testo Agenzia ITA in serbo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
</div>
        </div>
      
        <div className="w-full md:max-w-full mx-auto p-4 shadow-lg">
        <Image src={'/palazzo-italia.jpg'}
                    className="w-full"
                    alt={"Palazzo Italia"}
                    width={1140}
                    height={887}
                  
                     />
               <h2 className="font-archivo text-itaRed font-semibold border-b-itaGreen border-b">Foto &quot;rubata&quot; IIC - chiedere permesso!!</h2>        
        </div>        
      </div>
    </div>
  )
}

export default about