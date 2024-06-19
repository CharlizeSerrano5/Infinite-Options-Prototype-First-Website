import React from 'react';
import './StarRating.css';
import Star from './Star';
import './star-fill.svg';


function StarRating({empty_color, default_color, ratingValue, size='16'}){
    return(
        <div className='stars-rating'>
            {[...Array(ratingValue)].map(star => {
                return(
                <Star color={default_color} size={size}/>
                )
               // use a gradient css 
            })}
            {[...Array(5-ratingValue)].map(star => {
                return(
                <Star color={empty_color} size={size}/>
                )       
            })}
        </div>    
    )
}

export default StarRating;


