import React, { useState } from 'react'

interface VideoCompProps {
  link: string;
}

const videoComp: React.FC<VideoCompProps> = ({ link }) => {

  // const [url,setUrl] = useState('https://www.youtube.com/embed/')
  // const [videoId,setVideoId] = useState('') extract from url 
  // videoUrl = url + videoId

  return (
    <div className="w-full md:w-3/5 h-1/2 md:h-full bg-black">
        <iframe 
          width="100%" 
          height="100%" 
          src={link} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    
)
}

export default videoComp