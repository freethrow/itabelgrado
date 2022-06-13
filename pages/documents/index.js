import React from 'react'
import Link from 'next/link'
import {createClient} from 'contentful'
import Card from '../../components/Card'
import { FaFilePdf } from 'react-icons/fa';




export const getStaticProps = async () => {
    const client = createClient({
        space:'8p9eyzkkwusr' ,
        accessToken:'mcbRT2VyzzlPfVUC-xuhgaaueKUyO5lDzXE3HmDku70' ,
    })

    const res = await client.getEntries({content_type: 'document'})

    return {
        props:{
            documents:res.items
        }
    }
}


const Documents = ({documents}) => {
  console.log(documents[0])



  return (
    <div className="flex-1">



        <div className="grid grid-cols-3 gap-3 p-6">
            
            {documents.map(document=>(
               
                    <div key={document.sys.id}>

                       {document.fields.title} 
                       <Link href={'https:'+document.fields.document[0].fields.file.url} download="New" className="cursor-pointer">
                            <span><FaFilePdf scale={1.5} />  {document.fields.document[0].fields.title}</span>
                       </Link>
                       
                      
                    </div>
               
                            
                )
            )}

        </div>
    </div>
  )
}

export default Documents