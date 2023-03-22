import {createClient} from 'contentful'
import { documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Link from 'next/link'
import {GrDocumentVerified} from 'react-icons/gr'

const client = createClient({
    space:process.env.CONTENTFUL_SPACE_ID ,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY,
  })

export const getStaticPaths = async ()=> {
    const res = await client.getEntries({
        content_type:'article'
    })

    const paths = res.items.map(item => {
        return {
            params: {slug: item.fields.slug }
        }
    })
    return {
        paths
    }
}

export async function getStaticProps({params}){
    const {items} = await client.getEntries({
        content_type:'article',
        'fields.slug':params.slug
    })

    return {
        props: {article: items[0]}
    }
}


const ArticleDetails = ({article}) => {



  return (
    <div className="flex flex-col items-center justify-center align-middle relative my-5">
        <h2 className="font-archivo text-itaGreen font-semibold border-b-itaGreen border-b">{article.fields.title}</h2>
        <div className="grid gap-3 md:grid-cols-2 my-3 p-2">

            <div className=" max-w-lg p-5 shadow-md flex flex-col justify-center items-center">
                <Image                    
                    src={'https:'+ article.fields.cover.fields.file.url}
                    width={article.fields.cover.fields.file.details.image.width}
                    height={article.fields.cover.fields.file.details.image.height}
                    alt={''}
                />
            </div>
            
            <div className="prose prose-slate prose-sm text-sm z-20 bg-itaWhite flex flex-col justify-center items-center align-middle p-2">
          
            {documentToReactComponents(article.fields.content)}</div>

            </div>


            {article.fields.documents&&<h2 className="font-archivo text-itaGreen font-semibold text-center my-5 border-b-itaGreen border-b">Dokumenti</h2>}
                {article.fields.documents&&article.fields.documents.map((document)=>{
                    return (
                    
                        <Link href={'https:'+document.fields.file.url} download="New" className="cursor-pointer" key={document.fields.title}>
                            <div className="text-itaGray my-2 hover:text-itaRed cursor-pointer font-medium text-sm flex flex-row justify-start align-middle items-center space-x-2">
                            <GrDocumentVerified size={16} /> <span>{document.fields.title}</span>
                                  </div>
                        </Link>
                    )
                })}
        </div> 
        
  )
}

export default ArticleDetails