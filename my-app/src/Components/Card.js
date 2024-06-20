import React from 'react'
import './Card.css'
import StarRating from './StarRating'
import { Route, Link } from 'react-router-dom'
import GamePage from '../Pages/GamePage'

function Card({boardGames, id, title, imageUrl, rating}) {
    // function passVariables(){
    //     console.log('clicking gets this title: ', title);
    //     <Route path="/gamepage" element={<GamePage
    //         title={title}    
    //     />}/>
    // }
  return (
    <div className='card-container'>
        <Link to="/gamepage"
            title={title}
        >
        {/* <a href="GamePage" onClick={passVariables()}>    */}
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
        </Link>
    </div>
  )
}

export default Card