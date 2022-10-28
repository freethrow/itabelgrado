import { useEffect, useState } from "react"

import {createClient} from 'contentful'

import Video from "../components/Video"



import NewsCard from "../components/NewsCard"
import GalleryCard from "../components/GalleryCard"

import ACard from "../components/ACard"
const client = createClient({
  space:process.env.CONTENTFUL_SPACE_ID ,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticProps = async () => {
  

  const eventRes = await client.getEntries(
    {
      content_type: 'event',
      limit:1,
      order: '-sys.createdAt'
    })

  const articleRes = await client.getEntries(
      {
        content_type: 'article',
        limit:5,
        order: '-sys.createdAt'
      })
  
      const galleryRes = await client.getEntries(
        {
          content_type: 'gallery',
          limit:1,
          order: '-sys.createdAt'
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


  const [videoUrl, setVideoUrl] = useState('/iwt.mp4')






  return (
    <div className=" container max-w-5xl md:mx-auto px-2 md:px-0">

      <Video video = {videoUrl} />

 

      <div className="grid md:grid-cols-3 gap-3">

        <div className=" md:col-span-2">
          <h2 className=" font-archivo text-itaGreen font-bold text-xl border-itaGreen my-2 border-b-2">Događaji</h2>
          <ACard 
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

          <h2 className=" font-archivo text-itaRed font-bold text-xl  border-itaRed my-2 border-b-2">Galerije</h2>
          <GalleryCard 
                    key={gallery.sys.id}
                    url = {gallery.fields.cover.fields.file.url}
                    title = {gallery.fields.title}
                    address = {gallery.fields.address}
                    width={gallery.fields.cover.fields.file.details.image.width}
                    height={gallery.fields.cover.fields.file.details.image.height}
                    dateTime = {gallery.fields.date}
                    linkTo = {gallery.fields.slug}
                
                />
        </div>

        
        
      </div>
      
     
    </div>
  )
}
