import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'fecha';



const GalleryCard = ({title, address, dateTime, url, width, height, linkTo}) => {

  const evTime = format(new Date(dateTime), 'dddd MMMM Do, YYYY'); 

  return (
    <div className="w-full p-4 shadow-md flex flex-col justify-center items-center my-5 cursor-pointer">
        <Link href={"galleries/"+linkTo}>
        <div>
            <div className="font-archivo text-itaGreen font-semibold text-lg">{title}</div>
            <div className="text-sm font-medium text-itaGray">Neko</div>
            <div className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                <Image src={'https:'+ url}
                    className="w-full"
                    width={width}
                    height={height} />
            </div>
            <div className=" text-itaGray font-bold">{address} <span className=" font-semibold text-itaGreen">{evTime}</span></div>
        </div>
        </Link>
    </div>
  )
}

export default GalleryCard