import React from 'react'
import './Card.css'
import Star from './Star'
function Card({title, imageUrl, body}) {
  return (
    <div className='card-container'>
        <a href="GamePage">
            <div className="image-container">
                <img src={imageUrl} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    {title}
                </div>
                <p>
                    <Star />
                </p>
                
            </div>
        </a>
    </div>
  )
}

export default Card