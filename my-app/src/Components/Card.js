import React from 'react'
import './Card.css'
import StarRating from './StarRating'
import { Route, Link } from 'react-router-dom'
import GamePage from '../Pages/GamePage'

function Card({ id, title, imageUrl, rating}) {
  return (
    <div className='card-container'>        
            <div className="image-container">
                <img src={imageUrl} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    {title}
                </div>
                <div>
                    <StarRating
                        id={id}
                        size='16'
                        ratingValue={rating}
                        default_color="gold"
                        empty_color="lightgray"
                    />
                </div>
                
            </div>
    </div>
  )
}

export default Card