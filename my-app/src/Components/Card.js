import React from 'react'
import './Card.css'
function Card({title, imageUrl, body}) {
  return (
    <div className='card-container'>
        <a href="#">
            <div className="image-container">
                <img src={imageUrl} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    {title}
                </div>
            </div>
        </a>
    </div>
  )
}

export default Card