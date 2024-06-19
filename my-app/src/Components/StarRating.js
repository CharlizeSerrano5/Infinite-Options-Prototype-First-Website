import React from 'react';
import './StarRating.css';
import Star from './Star'


function StarRating({default_color, ratingValue}){
    return(
        <div>
            {[...Array(5)].map(star => {
                return 
                <Star color="default_color" size="16"/>;
            })}
            
        </div>    
    )
}

export default StarRating;


