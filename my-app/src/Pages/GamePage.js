import Header from '../Components/Header';
import Card from '../Components/Card';
import './GamePage.css'

export default function GamePage() {
  return (
    <div className="App">
      <div className='top-bar'>
        <Header></Header>
        <h1>
          Monopoly
        </h1>
      <div className='rating-container'>
        
          <div className='review'>
            <h1>
              Monopoly
            </h1>
            <p>
              When I play Monopoly, it generally lasts about an hour on average, which might sound reasonable, but is excessive. A game's length should complement the number of interesting decisions it has. A decent strategy is to buy every property you land on and try to trade for the red, orange, or purple properties. Orange has the highest expected return in a game, while red has the highest expected return per turn. The weakest properties are the Browns, the Blues (Boardwalk and Park place), and the Greens.
              There are a number of interesting decisions for the player to make about trades. I've seen screw-you trade alliances against players, but because only three are needed for a set, which can then be upgraded indefinitely, it's fairly common for only two players to bargain back and forth over a set. One has two properties and the other has one. This usually means that a single inexperienced player can make a single trade which tips the game, especially if they're trading St James Place for Boardwalk, giving the other player a complete set.
            </p>    
          </div>
          
          <div className='rating'>
            <h2>
              My Rating
            </h2>
            <h1 className='fraction'>
              4/5
            </h1>
            <div className='stars'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
              
            </div>
            
          </div>
          </div>

          
      </div>
      <div className='video-content'>
        <iframe width="420" height="315" src="https://www.youtube.com/watch?v=AuWvMgYv03g">
        </iframe> 
      </div>   
                  
    </div>
  );
}

