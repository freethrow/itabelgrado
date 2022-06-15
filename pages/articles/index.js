import React from 'react'
import Link from 'next/link'
import {createClient} from 'contentful'

import NewCard from '../../components/NewCard'





export const getStaticProps = async () => {
    const client = createClient({
        space:process.env.CONTENTFUL_SPACE_ID ,
        accessToken:process.env.CONTENTFUL_ACCESS_KEY,
      })

    const res = await client.getEntries({content_type: 'article'})

    return {
        props:{
            articles:res.items
        }
    }
}


const Articles = ({articles}) => {




  return (
    <div className="flex-1 max-w-5xl mx-auto my-5 container md:mx-auto px-4 ">

    <h2 className=" font-archivo text-itaGreen font-bold text-xl my-2">Novosti</h2>
    
            <div className="grid md:grid-cols-2 gap-5 my-8">
                
            
            {articles.map(article=>(
               
                <NewCard article={article} key={article.fields.title} />
               
                            
                )
            )}

        </div>
    </div>
  )
}

export default Articles