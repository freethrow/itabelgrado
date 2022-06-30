import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'fecha';



const GalleryCard = ({title, address, dateTime, url, width, height, linkTo}) => {

  const evTime = format(new Date(dateTime), 'dd.MM.YYYY.'); 

  return (
    <div className="w-full p-4 shadow-md flex flex-col justify-between items-stretch my-5 cursor-pointer">
        <Link href={"galleries/"+linkTo}>
        <div>
            <div className="font-archivo text-itaGreen font-semibold text-lg">{title}</div>
            
            <div className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                <Image src={'https:'+ url}
                    className="w-full"
                    alt={title}
                    width={width}
                    height={height} />
            </div>
            <div className=" text-itaGray font-normal">{address} <br/> <span className="text-itaGreen">{evTime}</span></div>
        </div>
        </Link>
    </div>
  )
}

export default GalleryCard