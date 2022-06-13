import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




const NewsCard = ({articles}) => {


  return (
    <div className="w-full p-4 shadow-md flex flex-col justify-center items-center my-5 cursor-pointer">
    {articles&&articles.map((article)=>(
      <Link href={"articles/"+article.fields.slug} key={article.fields.slug}>
      <div className="my-3 flex flex-col w-full ">
         <div className="font-archivo text-itaGreen font-semibold">{article.fields.title}</div>        
        <div className="text-sm  font-normal text-itaGray">{article.fields.short}</div>
      </div>
      </Link>
    ))}  
      
    </div>
  )
}

export default NewsCard