import React from 'react'
import './Card.css'
import Star from './StarTrial'
import { Route } from 'react-router-dom'
function Card({title, imageUrl, body}) {
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
                    <Star 
                    size='16'
                    color="gold"
                    />
                </div>
                
            </div>
        </a>
    </div>
  )
}

export default Card