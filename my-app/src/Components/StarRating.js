import React from 'react';
import './StarRating.css';
import Star from './Star';
import './star-fill.svg';


function StarRating({id, empty_color, default_color, ratingValue, size='16'}){
    // let temp_arr = [Array(parseInt(ratingValue))];
    // let temp_arr = [Array(parseInt(ratingValue)).fill(1)];
    return(
        <div className='stars-rating'>
            {[...Array.from(Array(parseInt(ratingValue)).keys())].map(star => {
                console.log("id: ", star+id)   
                return(
                    <Star
                        id={star+id}
                        color={default_color}
                        size={size}
                    />
                )
               // use a gradient css 
            })}
            
            {/*             
            {temp_arr[0].map(star => {
                return (
                    <Star
                        color = {default_color}
                        size = {size}
                    />
                )
            })} */}
            {[...Array(5-ratingValue)].map(star => {
                return(
                    <Star
                        id={star}
                        color={empty_color}
                        size={size}
                    />
                )
            })}
        </div>    
    )
}

export default StarRating;


