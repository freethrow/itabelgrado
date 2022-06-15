import Image from 'next/image'

import {BiMailSend} from 'react-icons/bi'
const about = () => {
  return (
    <div className="flex flex-col container max-w-5xl md:mx-auto px-2 md:px-0">
      <div className=" grid md: grid-cols-2 gap-3">
        <div className="my-5 h-full flex flex-col justify-center ">
        <h2 className="font-archivo text-itaGreen font-semibold border-b-itaGreen border-b">O Agenciji</h2>
          <div className="text-itaGgray my-4 text-sm font-normal">Testo sull'Agenzia ITA in serbo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
</div>
        </div>
      
        <div className="w-full md:w-96 md:max-w-full mx-auto p-4">
          <div className="p-6 shadow-md sm:rounded-md">
            <form>
              <label className="block mb-6">
                <span className=" text-itaGray text-sm">Ime i prezime</span>
                <input
                  type="text"
                  name="name"
                  className="
                    block
                    w-full
                    text-xs
                    p-2
                    mt-1
                    border-itaGray
                    rounded-md
                    shadow-sm
                    focus:border-itaLightGray
                    focus:ring
                    focus:ring-itaLightGray
                
                   
                  "
                  placeholder="Joe Bloggs"
                />
              </label>
              <label className="block mb-6">
                <span className=" text-itaGray text-sm">Firma</span>
                <input
                  type="text"
                  name="company"
                  className="
                    block
                    w-full
                    mt-1
                    border-itaGray
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  placeholder="Firma DOO"
                />
              </label>
              <label className="block mb-6">
                <span className="text-itaGray text-sm">Email addresa</span>
                <input
                  name="email"
                  type="email"
                  className="
                    block
                    w-full
                    mt-1
                    p-2
                    rounded-md
                    shadow-sm
                  
                  "
                  placeholder="joe.bloggs@example.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-itaGray text-sm">Poruka</span>
                <textarea
                  name="message"
                  className="
                    block
                    w-full
                    mt-1
                    
                    rounded-md
                    shadow-sm
                    focus:border-itaGreen
                    focus:ring
                    focus:ring-itaGreen
                    focus:ring-opacity-50
                  "
                  rows="3"
                  placeholder="Vaša poruka"
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="
                    h-10
                    px-5
                    text-itaWhite
                    bg-itaRed
                    rounded-lg
                    w-full
          
                    focus:shadow-outline
                    hover:opacity-80 transition-opacity duration-300
                    flex flex-row items-center justify-center align-middle
                  "
                >
                  <BiMailSend size={30} /> Poslati
                </button>
              </div>

            </form>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default about