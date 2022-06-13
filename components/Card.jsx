import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'fecha';

const Card = ({title, cover, url, cover_w, cover_h, short, eventTime}) => {


  const evTime = format(new Date(eventTime), 'dddd MMMM Do, YYYY'); 
  return (

<Link href={url}>

<div className="card w-full bg-base-100 shadow-xl mx-auto">
  <figure className=" w-full">
    <Image src={'https:'+ cover}
    className="w-full"
    width={cover_w}
    height={cover_h} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-itaGreen font-medium">
      {title}
    </h2>
      <div className="badge badge-primary badge-outline badge-lg">{evTime}</div>
    
    <p className=" font-light">{short}</p>
    <p>{evTime}</p>
   
    <div className="card-actions justify-end">
      <div className="btn btn-primary">Details</div> 

    </div>
  </div>
</div>


</Link>
    
  )
}

export default Card