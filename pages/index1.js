import { useEffect, useState } from "react"

import {createClient} from 'contentful'


import Image from "next/image"
import Video from "../components/Video"
import HomeCard from "../components/HomeCard"
import NewsCard from "../components/NewsCard"


const client = createClient({
  space:process.env.CONTENTFUL_SPACE_ID ,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticProps = async () => {
  

  const eventRes = await client.getEntries(
    {
      content_type: 'event',
      limit:1,
      order: 'sys.createdAt'
    })

  const articleRes = await client.getEntries(
      {
        content_type: 'article',
        limit:5,
        order: 'sys.createdAt'
      })
  
      const galleryRes = await client.getEntries(
        {
          content_type: 'gallery',
          limit:1,
          order: 'sys.createdAt'
        })
  

  return {
      props:{
          event:eventRes.items[0],
          articles:articleRes.items,
          gallery:galleryRes.items[0]

      }
  }
}



export default function Home({event, articles, gallery}) {


  const [videoUrl, setVideoUrl] = useState('/MAC.mp4')

  useEffect(()=>{
    let items = ['/MAC.mp4','/Agri-food_SAFE.mp4']
    setVideoUrl(items[Math.floor(Math.random()*items.length)])

  },[])

  console.log(event)
  console.log(gallery)
  console.log(articles)



  return (
    <div className=" container max-w-5xl md:mx-auto px-4">
      <Video video = {videoUrl} />

      <div className="grid md:grid-cols-3 gap-3">

        <div className=" md:col-span-2">
          <h2 className=" font-archivo text-itaGreen font-bold text-xl border-itaGreen my-2 border-b-2">Najava manifestacija</h2>
          <HomeCard 
            title = {event.fields.title} 
            description = {event.fields.short} 
            eventTime={event.fields.eventTime} 
            url = {event.fields.cover.fields.file.url}  
            width = {event.fields.cover.fields.file.details.image.width}
            height= {event.fields.cover.fields.file.details.image.height}
            linkTo = {'/'+event.fields.slug}
            
          />

     

        </div>
        <div className="">
        <h2 className=" font-archivo text-itaRed font-bold text-xl  border-itaRed my-2 border-b-2">Novosti</h2>
        <NewsCard articles = {articles} />
        </div>
      </div>
      
     
    </div>
  )
}
