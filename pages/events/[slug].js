import {createClient} from 'contentful'
import { documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import {GrDocumentVerified, GrLink} from 'react-icons/gr'


const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false
  });


const client = createClient({
    space:'8p9eyzkkwusr' ,
    accessToken:'mcbRT2VyzzlPfVUC-xuhgaaueKUyO5lDzXE3HmDku70' ,
})

export const getStaticPaths = async ()=> {
    const res = await client.getEntries({
        content_type:'event'
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
        content_type:'event',
        'fields.slug':params.slug
    })

    return {
        props: {event: items[0]}
    }
}


const EventDetails = ({event}) => {
 
    const position = [event.fields.location.lat, event.fields.location.lon]

  return (
      <div className="container max-w-5xl md:mx-auto px-2 md:px-0">
    <div className="flex flex-col items-center justify-center align-top relative mt-5 ">
       

        <div className="grid md:grid-cols-2 z-20 gap-5 max-w-5xl md:mx-auto mx-2 my-2 px-3">
            <div className="">
                <div className="p-8 shadow-lg my-4 bg-itaWhite rounded-t-xl">
                              
                    <h2 className="font-archivo text-itaGreen font-semibold border-b-itaGreen border-b">{event.fields.title}</h2>
                    <div className="prose prose-p:my-2 prose-sm">
                        {documentToReactComponents(event.fields.detailed)}
                    </div>
                </div>
            </div>

            <div>
            <div className="w-full hidden md:block">
            <Image                 
                src={'https:'+ event.fields.cover.fields.file.url}
                width={event.fields.cover.fields.file.details.image.width}
                height={event.fields.cover.fields.file.details.image.height}
            />         
            </div>

            <div className="p-8 shadow-lg my-4 bg-itaWhite rounded-t-xl">
                {event.fields.links&&<h2 className="font-archivo text-itaGreen font-semibold text-center border-b-itaGreen border-b">Korisni linkovi</h2>}
                {event.fields.links&&event.fields.links.map((link)=>{
                    return (
                    <Link key={link.link} href={link.fields.link}>
                        <div className="text-itaGray my-2 hover:text-itaRed cursor-pointer font-medium text-sm flex flex-row justify-start align-middle items-center space-x-2">
                            <GrLink size={16} /><span>{link.fields.description}</span></div>
                    </Link>
                    )
                })}

                {event.fields.documents&&<h2 className="font-archivo text-itaGreen font-semibold text-center my-5 border-b-itaGreen border-b">Dokumenti</h2>}
                {event.fields.documents&&event.fields.documents.map((document)=>{
                    return (
                    
                        <Link href={'https:'+document.fields.file.url} download="New" className="cursor-pointer">
                            <div className="text-itaGray my-2 hover:text-itaRed cursor-pointer font-medium text-sm flex flex-row justify-start align-middle items-center space-x-2">
                            <GrDocumentVerified size={16} /> <span>{document.fields.title}</span>
                                  </div>
                        </Link>
                    )
                })}
            <h2 className="font-archivo text-itaGreen font-semibold text-center my-5 border-b-itaGreen border-b">Mapa</h2>
            <div className="location">
            
                <div id="map" className="z-30">
                    <MapWithNoSSR position={position} />        
                </div>
        </div>        
        </div>
            </div>
        </div>
       
       
        </div>
        </div>

  
        
  )
}

export default EventDetails