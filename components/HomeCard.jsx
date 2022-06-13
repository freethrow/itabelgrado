import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'fecha';



const HomeCard = ({title, description, eventTime, url, width, height, linkTo}) => {

  const evTime = format(new Date(eventTime), 'dddd MMMM Do, YYYY'); 

  return (
    <div className="w-full p-4 shadow-md flex flex-col justify-between items-center align-top cursor-pointer">
        <Link href={"/events"+linkTo}>
        <div>
            <div className="font-archivo text-itaGreen font-semibold text-lg">{title}</div>
            <div className="text-xs my-2 font-medium text-itaLightGray">{description}</div>
            <div className="opacity-80 hover:opacity-100 transition-opacity duration-300 flex-1">
                <Image src={'https:'+ url}
                    className="w-full"
                    width={width}
                    height={height}
                    layout={"responsive"} />
            </div>
            <div className=" text-itaGray font-bold my-4">ITA Agency <span className=" font-semibold text-itaGreen">{evTime}</span></div>
        </div>
        </Link>
    </div>
  )
}

export default HomeCard