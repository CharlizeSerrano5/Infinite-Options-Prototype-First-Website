import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import GamePage from './Pages/GamePage'

function App() {
  const [boardGames, setBoardGames] = useState([]);

  useEffect(() => {
    const fetchBoardGames = async () => {
      try {
        const response = await axios.get('https://hl2qrc5x51.execute-api.us-west-1.amazonaws.com/dev/boardgames');
        // console.log("response data result:", response.data.boardgames.result);
        setBoardGames(response.data.boardgames.result);
      } catch (error) {
        console.error('Error fetching board games:', error);
      }
    };

    fetchBoardGames();
  }, []);
  console.log("boardGames: ", boardGames);

  // function jsonList(){
  //   console.log("in function that is going to call the endpoint");
  //   // const jsonArray = [];
  //   var jsonArray = [];
  //   const populateData = (data) => {jsonArray.push(data)};
  //     axios.get(`https://hl2qrc5x51.execute-api.us-west-1.amazonaws.com/dev/boardgames`)
  //     .then(response => {
  //       // use a useEffect(), create a dependency
  //       // handle the response
  //         // localStorage.setItem('cachedData', JSON.stringify(response.data.boardgames.result));
  //         // console.log();
  //         // const temp_data = JSON.parse(localStorage.getItem('cachedData'));
  //         // console.log("temp data: ", temp_data);

  //         const jsonData = response.data; // object file
  //         console.log(jsonData);
  //         const result = jsonData.boardgames.result;
  //         for (let i = 0; i < result.length; i++) {
  //           populateData(jsonData.boardgames.result[i]); 
  //         }
  //         console.log("result: ", result);
  //     })
  //   console.log('jsonArray: ', jsonArray);
  //   return jsonArray;
  // }

  
  return (
    <div>
      {/* {jsonList()} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home
          // jsonList={jsonList()}
          />}/>

          <Route path="/home" element={<Home
          // jsonList={jsonList()}
          />}/>
          <Route path="/gamepage" element={<GamePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
