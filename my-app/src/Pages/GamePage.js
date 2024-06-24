import Header from '../Components/Header';
import Video from '../Components/Video';
import StarRating from '../Components/StarRating';
import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


import './GamePage.css'

export default function GamePage({boardGames, listItem}) {
  const { game_uid } = useParams(); // Retrieves game_uid from the URL
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gameData, setGameData] = useState(null);



  // console.log('opened game_uid: ', game_uid)
  console.log("game data:", gameData);
  useEffect(() => {
    const game = boardGames.find((game) => game.game_uid === game_uid);
    setGameData(game);


    const fetchVideos = async () => {
      try {
          const response = await axios.get(`https://hl2qrc5x51.execute-api.us-west-1.amazonaws.com/dev/videos/${game_uid}`);
          console.log("response data result:", response.data.videos.result);
          setVideos(response.data.videos.result);
          setLoading(false);
      } catch (error) {
          console.error('Error fetching videos of games:', error);
          setLoading(true);
      }
    };
    fetchVideos();
  }, [game_uid, boardGames]);

  let videoPlay, videoReview, videoInstructions;

  if (gameData){
    console.log("game data true");
    videoPlay = videos.find((video) => video.video_type === "Play");
    if (!videoPlay){
      videoPlay = 'https://www.youtube.com/embed/AuWvMgYv03g?si=cb7Rc8A_TeQptOVM'
    }
    // console.log("video link for play: ", videoPlay);
    videoReview = videos.find((video) => video.video_type === "Review");
    if (!videoReview){
      videoReview = 'https://www.youtube.com/embed/iP0kh9yZak8?si=rqRPF8ejNGpL1_cf'
    }
    console.log("video link for review: ", videoReview);
    videoInstructions = videos.find((video) => video.video_type === "Instrutions");
    // console.log("video link for instructions: ", videoInstructions);
    if (!videoInstructions){
      videoInstructions = 'https://www.youtube.com/embed/s-r38R6jtgk?si=5wa33eq5s3hE7MBh'
    }
  }
  else if (!gameData || loading === true){
    return <div>Loading...</div>;
  }

  // console.log("play link", videoPlay.video_link);
  // console.log("review link", videoReview.video_link);
  // console.log("instructino link", videoInstructions.video_link);
  // console.log('videos: ', videos);

  return (
    <div className="page">
      <div className='top-bar'>
        <Header></Header>
        <div className='top-content'>
            <h1 className='game-name'>
              {gameData.game_name}
              {/* Monopoly */}
            </h1>
            <div className='rating-container'>
              <div className='review'>
                <p className='review-title'>
                  My Review
                </p>
                <p className='review-paragraph'>
                  {/* When I play Monopoly, it generally lasts about an hour on average, which might sound reasonable, but is excessive. A game's length should complement the number of interesting decisions it has. A decent strategy is to buy every property you land on and try to trade for the red, orange, or purple properties. Orange has the highest expected return in a game, while red has the highest expected return per turn. The weakest properties are the Browns, the Blues (Boardwalk and Park place), and the Greens. */}
                  {/* {gameData.game_review?
                  gameData.game_review: 
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."        
                  } */}

                  {gameData.game_review ? (
                      gameData.game_review
                  ) : (
                      gameData.game_description ? (
                          gameData.game_description
                      ) : (
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      )
                  )}
                  
                </p>
                {/* <p className='review-paragraph'>
                  There are a number of interesting decisions for the player to make about trades. I've seen screw-you trade alliances against players, but because only three are needed for a set, which can then be upgraded indefinitely, it's fairly common for only two players to bargain back and forth over a set. One has two properties and the other has one. This usually means that a single inexperienced player can make a single trade which tips the game, especially if they're trading St James Place for Boardwalk, giving the other player a complete set.
                </p>     */}
              </div>
              <div className='rating'>
                <h2>
                  My Rating
                </h2>
                <div className='fraction-container'>
                  <h1 className='fraction'>
                    {gameData.game_rating}/5
                  </h1>
                </div>
                
                <div className='stars'>
                    <StarRating
                        size='60'
                        ratingValue={gameData.game_rating}
                        default_color="black"
                        empty_color="white"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className='video-content'>
      {videos.map(listItem => (
          <Video key={`${listItem.video_type}-${listItem.video_video_uid}`} id={`${listItem.video_type}-${listItem.video_video_uid}`}
          title={listItem.video_type}
          link={listItem.video_link}
          // {...console.log("MAPPING VIDEO TYPE", listItem.video_type)}
          // video='https://www.youtube.com/embed/AuWvMgYv03g?si=cb7Rc8A_TeQptOVM'
          video={listItem.video_link}
          {...console.log("MAPPING LINK", listItem.video_type, listItem.video_link)}
          
        />
        
        
      ))}
        {/* <Video
                title='How to Play'
                // video='https://www.youtube.com/embed/AuWvMgYv03g?si=cb7Rc8A_TeQptOVM'
                video={videoPlay.video_link}
                  {...console.log("PLAY LINK", videoPlay.video_link)}
                  
        />
        <Video
                title='Demo Game'
                // video='https://www.youtube.com/embed/iP0kh9yZak8?si=rqRPF8ejNGpL1_cf'
                video={videoReview.video_link}
                {...console.log("REVIEW LINK", videoReview.video_link)}

        />
        <Video
                title='Strategy Tips'
                // video='https://www.youtube.com/embed/s-r38R6jtgk?si=5wa33eq5s3hE7MBh'
                
                // {...gameData?
                //   videoInstructions = videos.find((video) => video.video_type === "Instrutions"):
                //   videoInstructions = 'https://www.youtube.com/embed/s-r38R6jtgk?si=5wa33eq5s3hE7MBh'
                // }

                video={videoInstructions.video_link}
                {...console.log("INSTRUCTIONS LINK", videoInstructions.video_link)}

        /> */}
      </div>               
    </div>
  );
}

