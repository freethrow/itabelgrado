import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'fecha';

const ACard = ({title, description, eventTime, url, width, height, linkTo}) => {

    
const evTime = format(new Date(eventTime), 'DD. MM. YYYY. [u] HH:mm'); 


    return (
        <Link href={"/events"+linkTo}>
        <div className="w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg my-3 flex flex-col justify-between cursor-pointer transition-transform duration-300">
            <div className="px-4 py-2">
                <h1 className="text font-bold text-itaGreen uppercase dark:text-white">{title}</h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            </div>
            <div className="relative bg-itaGreen hover:bg-[#000000] transition-colors  duration-500">
                <div className="absolute z-10 top-0 left-0  text-center h-full w-full flex flex-col items-center justify-center align-middle text-itaWhite">
                <h3 className="border border-b-itaWhite p-4 m-2 w-2/3">{title}</h3>
                <div className="w-2/3 font-bold text-xl">{evTime}</div>
                </div>
            <Image src={'https:'+ url} 
                className="object-cover w-full h-48 mt-2 opacity-60"
                    width={width/4}
                    height={height/4}
                    priority={true}
                    alt={title}
                    layout={"responsive"} />
            </div>
            <div className="flex items-center justify-between px-1 py-1 my-2 bg-gray-900">
                <div className="text-itaGray border border-itaGreen px-4 py-2 hover:bg-itaGreen hover:text-itaWhite transition-colors duration-500 rounded-full cursor-pointer">informacije</div>
       
            </div>
        </div>
        </Link>
  )
}

export default ACard