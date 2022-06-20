import React from 'react'
import Link from 'next/link'
import {createClient} from 'contentful'
import Card from '../../components/Card'
import HomeCard from '../../components/HomeCard'
import ACard from '../../components/ACard'




export const getStaticProps = async () => {
    const client = createClient({
        space:process.env.CONTENTFUL_SPACE_ID ,
        accessToken:process.env.CONTENTFUL_ACCESS_KEY,
      })
    const res = await client.getEntries({content_type: 'event'})

    return {
        props:{
            events:res.items
        }
    }
}


const Events = ({events}) => {

    console.log(events.length)


  return (
    <div className="flex-1 max-w-5xl mx-auto my-5 container  px-2 md:px-0">

<h2 className=" font-archivo text-itaGreen font-bold text-xl my-2 text-center border-itaGreen border-b">Najava manifestacija</h2>

        <div className="grid md:grid-cols-3 gap-5 my-8">
            
            {events.map(event=>(
            
            <ACard 
                key={event.fields.slug}
                title = {event.fields.title} 
                description = {event.fields.short} 
                eventTime={event.fields.eventTime} 
                url = {event.fields.cover.fields.file.url}  
                width = {event.fields.cover.fields.file.details.image.width}
                height= {event.fields.cover.fields.file.details.image.height}
                linkTo = {'/'+event.fields.slug}            
            />

                            
                )
            )}

        </div>
    </div>
  )
}

export default Events