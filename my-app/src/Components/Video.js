import React from 'react'
import './Video.css'
function Video({title, video}) {
  return (
    <div className='video-container'>
        <div className='video-title'>
            {title}
        </div>
        <div className="video-player">
            <iframe width="840" height="480" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default Video