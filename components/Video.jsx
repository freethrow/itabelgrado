import React from 'react'



const Video = ({video}) => {
  return (
    <header className="relative my-10 items-center justify-center h-96 overflow-hidden hidden md:flex">
  <div
    className="relative z-30 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
  >
   
  </div>
  <video
    autoPlay
    loop
    muted
    className="absolute z-10 w-auto  min-h-full"
    id="video"
  >
    <source
      src={video}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</header>
  )
}

export default Video