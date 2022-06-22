import React from 'react'
import {createClient} from 'contentful'

import Image from 'next/image'
import Link from 'next/link'

import GalleryCard from '../../components/GalleryCard'




export const getStaticProps = async () => {
    const client = createClient({
        space:process.env.CONTENTFUL_SPACE_ID ,
        accessToken:process.env.CONTENTFUL_ACCESS_KEY,
      })

    const res = await client.getEntries({content_type: 'gallery'})

    return {
        props:{
            galleries:res.items
        }
    }
}


const Galleries = ({galleries}) => {


  return (
    <div className="flex-1 max-w-5xl mx-auto my-5 container  px-2 md:px-0 ">

<h2 className=" font-archivo text-itaGreen font-bold text-xl my-2 text-center border-b-itaGreen border-b">Galerije slika</h2>
    
            <div className="grid md:grid-cols-2 gap-5 my-4">
            
            {galleries.map(gallery=>(

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
                            
                )
            )}

        </div>
    </div>

  )
}

export default Galleries