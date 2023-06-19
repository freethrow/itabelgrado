import React from 'react'
import Link from 'next/link'
import {createClient} from 'contentful'
import Image from 'next/image'
import NewCard from '../../components/NewCard'





export const getStaticProps = async () => {
    const client = createClient({
        space:process.env.CONTENTFUL_SPACE_ID ,
        accessToken:process.env.CONTENTFUL_ACCESS_KEY,
      })

    const res = await client.getEntries({content_type: 'clipping',  order: '-sys.createdAt',})

    

    return {
        props:{
            clippings:res.items
        }
    }
}


const Clippings = ({clippings}) => {




  return (
    <div className="flex-1 max-w-5xl mx-auto my-5 container md:mx-auto px-4 ">

    <h2 className=" font-archivo text-itaGreen font-bold text-xl my-2 text-center border-b-itaGreen border-b">ITA Beograd u medijima</h2>
    
            <div className="grid md:grid-cols-3 gap-5 my-8">
                
            
            {clippings.map(clipping=>(
               
               <div className="p-4 shadow-md" key={clipping.sys.id}>
                
                    <div className="text-sm text-center text-itaGray">{clipping.fields.title}</div>
                    <div className="text-xl p-3 text-center flex flex-col hover:scale-105 transition-transform duration-150">
                        <Link href={clipping.fields.link}><a>
                            {clipping.fields.picture?
                                <p>
                                    <Image                    
                                        src={'https:'+ clipping.fields.picture.fields.file.url}
                                        width={clipping.fields.picture.fields.file.details.image.width}
                                        height={clipping.fields.picture.fields.file.details.image.height}
                                        alt={''}
                                    />
                                </p>:<></>}
                        <p className="border border-itaDarkGray my-2  py-2">{clipping.fields.source}</p>
                            <p className="text-xs">{clipping.fields.dateTime}</p>
                        </a></Link> 
                        </div>                    
                  
                    {clipping.fields.event?<div className="text-xs text-itaGray my-4 flex flex-col justify-center items-center">
                        <Link href={"/events/"+clipping.fields.event.fields.slug}>
                            <a className="bg-itaGreen text-itaWhite text-center p-2 rounded-md">{clipping.fields.event.fields.title}</a>
                        </Link></div>:<></>}
                </div>
               
                            
                )
            )}

        </div>
    </div>
  )
}

export default Clippings