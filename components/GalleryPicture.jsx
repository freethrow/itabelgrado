import React from 'react'
import Image from 'next/image'

import {useState} from 'react'


const GalleryPicture = ({url, width, height}) => {

    const [open, setOpen] = useState(false)

    const handleClick = ()=>{
        setOpen(!open)
    }
    
  return (

<div className={open?"lightbox":"card card-compact w-full bg-base-100 shadow-xl rounded-md"} onClick={handleClick}>
  <figure>
      <Image                 
            src={'https:'+ url}
            width={width}
            height={height}
            
        />
    </figure>

</div>

  
  )
}

export default GalleryPicture