import React from 'react'
import './Card.css'
import StarRating from './StarRating'
import { Route } from 'react-router-dom'
function Card({title, imageUrl, rating}) {
    console.log("rating: ", rating)
    function passVariables(){
        localStorage.setItem("title", title);
        // localStorage.setItem("")   
    }
  return (
    <div className='card-container'>
        <a href="GamePage" onClick={passVariables()}>
            <div className="image-container">
                <img src={imageUrl} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    {title}
                </div>
                <div>
                    <StarRating
                        size='16'
                        ratingValue={4}
                        default_color="gold"
                        empty_color="lightgray"
                    />
                </div>
                
            </div>
        </a>
    </div>
  )
}

export default Card