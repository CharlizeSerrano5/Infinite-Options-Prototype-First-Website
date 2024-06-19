import React from 'react';
import './StarRating.css';
import Star from './Star';
import './star-fill.svg';


function StarRating({default_color, ratingValue}){
    // for (let i =0; i< 5; i++){
    //     console.log("yes");
    // }
    return(
        <div className='stars-rating'>
            {[...Array(5)].map(star => {
                return(
                <Star color="default_color" size="16"/>
                )
                
            })}
            
            
        </div>    
    )
}

export default StarRating;


