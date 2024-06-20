import Header from '../Components/Header';
import Star from '../Components/StarTrial';
import Video from '../Components/Video';
import StarRating from '../Components/StarRating';
import { useParams } from 'react-router-dom'

import './GamePage.css'

export default function GamePage({boardGames, listItem}) {
  // console.log('title: ', title);
  const params = useParams();
  let gameData = null
  return (
    console.log("params: ", JSON.stringify(params)),

    <div className="page">
      <div className='top-bar'>
        <Header></Header>
        <div className='top-content'>
            <h1 className='game-name'>
              {/* {title} */}
              Monopoly
            </h1>
            <div className='rating-container'>
              <div className='review'>
                <p className='review-title'>
                  My Review
                </p>
                <p className='review-paragraph'>
                  When I play Monopoly, it generally lasts about an hour on average, which might sound reasonable, but is excessive. A game's length should complement the number of interesting decisions it has. A decent strategy is to buy every property you land on and try to trade for the red, orange, or purple properties. Orange has the highest expected return in a game, while red has the highest expected return per turn. The weakest properties are the Browns, the Blues (Boardwalk and Park place), and the Greens.
                </p>
                <p className='review-paragraph'>
                  There are a number of interesting decisions for the player to make about trades. I've seen screw-you trade alliances against players, but because only three are needed for a set, which can then be upgraded indefinitely, it's fairly common for only two players to bargain back and forth over a set. One has two properties and the other has one. This usually means that a single inexperienced player can make a single trade which tips the game, especially if they're trading St James Place for Boardwalk, giving the other player a complete set.
                </p>    
              </div>
              <div className='rating'>
                <h2>
                  My Rating
                </h2>
                <div className='fraction-container'>
                  <h1 className='fraction'>
                    4/5
                  </h1>
                </div>
                
                <div className='stars'>
                    <StarRating
                        size='60'
                        ratingValue={4}
                        default_color="black"
                        empty_color="white"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className='video-content'>
        <Video
                title='How to Play'
                video='https://www.youtube.com/embed/AuWvMgYv03g?si=cb7Rc8A_TeQptOVM'
        />
        <Video
                title='Demo Game'
                video='https://www.youtube.com/embed/iP0kh9yZak8?si=rqRPF8ejNGpL1_cf'
        />
        <Video
                title='Strategy Tips'
                video='https://www.youtube.com/embed/s-r38R6jtgk?si=5wa33eq5s3hE7MBh'
        />
      </div>               
    </div>
  );
}

