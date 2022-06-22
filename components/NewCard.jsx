import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const NewCard = ({article}) => {
  return (
    <Link href={"articles/"+article.fields.slug}>
    <div className="w-full p-4 shadow-md flex flex-col justify-center items-center my-5 cursor-pointer ">    
   
         <div className="font-archivo text-itaGreen font-semibold">{article.fields.title}</div>
        <div className=" opacity-50 hover:opacity-100 transition-opacity duration-300 flex-1 m-2" >
          <Image             
            src={'https:'+ article.fields.cover.fields.file.url}
            width={article.fields.cover.fields.file.details.image.width}
            height={article.fields.cover.fields.file.details.image.height}
            priority
            />
        </div>
        <div className="text-sm  font-normal text-itaGray">{article.fields.short}</div>

      
    </div>
    </Link>
  )
}

export default NewCard