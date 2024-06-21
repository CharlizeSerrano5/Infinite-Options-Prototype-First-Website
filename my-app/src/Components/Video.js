import React from 'react'
import './Video.css'
function Video({title, video}) {
  // const isYouTube = video.includes('youtube.com') || video.includes('youtu.be');

  return (
    <div className='video-container'>
        <div className='video-title'>
            {title}
        </div>
        <div className="video-player">
            <iframe width="840" height="480" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        {/* {isYouTube ? (
        <iframe
          width="560"
          height="315"
          src={video}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : ( */}
        {/* <video width="560" height="315" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      {/* )} */}
    </div>
  )
}

export default Video