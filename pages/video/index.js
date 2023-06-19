import React from 'react'
//import Link from 'next/link'
import {createClient} from 'contentful'

import NewCard from '../../components/NewCard'

// Yputube lite
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"



export const getStaticProps = async () => {
    const client = createClient({
        space:process.env.CONTENTFUL_SPACE_ID ,
        accessToken:process.env.CONTENTFUL_ACCESS_KEY,
      })

    const res = await client.getEntries({content_type: 'video',  order: '-sys.createdAt',})

    return {
        props:{
            videos:res.items
        }
    }
}


const Videos = ({videos}) => {




  return (
    <div className="flex-1 max-w-5xl mx-auto my-5 container md:mx-auto px-4 ">

    <h2 className=" font-archivo text-itaGreen font-bold text-xl my-2 text-center border-b-itaGreen border-b">Video</h2>
    
            <div className="grid md:grid-cols-3 gap-5 my-8">
            {videos&&videos.map((video)=>{
                    return (

                  
                        <div className='p-2 shadow-lg' key={video.fields.id}>
                            <h3 className="font-archivo text-itaGreen font-bold text-md my-2 text-center">{video.fields.title}</h3>
                            <LiteYouTubeEmbed
                                aspectHeight="9"
                                aspectWidth="16"
                                id={video.fields.id}
                                title={video.fields.title}
                                allowFullScreen
                            />
                        </div>
                     
                    )
                })}
          
            </div>
    </div>
  )
}

export default Videos