import {createClient} from 'contentful'

import PhotoAlbum from "react-photo-album";

import Image from 'next/image'

import {useState} from 'react'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const client = createClient({
    space:process.env.CONTENTFUL_SPACE_ID ,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY,
  })

export const getStaticPaths = async ()=> {
    const res = await client.getEntries({
        content_type:'gallery'
    })

    const paths = res.items.map(item => {
        return {
            params: {slug: item.fields.slug }
        }
    })
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){

  
    const {items} = await client.getEntries({
        content_type:'gallery',
        'fields.slug':params.slug
    })

    return {
        props: {gallery: items[0]}
    }
}


const GalleryDetails = ({gallery}) => {


  
    const photos = gallery.fields.media.map(picture=>{
        return {
            'src':picture.fields.file.url,
            'width':picture.fields.file.details.image.width,
            'height':picture.fields.file.details.image.height,
        }
    })

    const slides = photos.map(({ src, width, height }) => ({
        src,
        aspectRatio: width / height
    }));

    const [index, setIndex] = useState(-1);
    
 


  return (
    <div className="flex flex-col items-center justify-center align-middle md:mx-auto max-w-5xl relative mx-5  ">
         <h2 className="font-archivo text-itaGreen font-semibold border-b-itaGreen border-b my-10">{gallery.fields.title}</h2>
        <div className="">


            <div className="my-10 mx-5">
              
                <PhotoAlbum layout="columns" photos={photos} onClick={(event, photo, index) => setIndex(index)} className="border4 border-itaRed" />
                <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
     

            </div>

         
        </div>
        



    </div>  
        
  )
}

export default GalleryDetails