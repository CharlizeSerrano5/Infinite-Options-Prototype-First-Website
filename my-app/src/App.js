import './App.css';
import axios from 'axios';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import GamePage from './Pages/GamePage'

function App() {
  function jsonList(){
    // const jsonArray = [];
    var jsonArray = [];
    const populateData = (data) => {jsonArray.push(data)};
    axios.get(`https://hl2qrc5x51.execute-api.us-west-1.amazonaws.com/dev/boardgames`)
    .then(response => {
    
      // handle the response
        // localStorage.setItem('cachedData', JSON.stringify(response.data.boardgames.result));
        // console.log();
        // const temp_data = JSON.parse(localStorage.getItem('cachedData'));
        // console.log("temp data: ", temp_data);

        const jsonData = response.data; // object file
        // console.log(jsonData);
        const result = jsonData.boardgames.result;
        for (let i = 0; i < result.length; i++) {
          populateData(jsonData.boardgames.result[i]); 
        }
        console.log("result: ", result);
    })
    return jsonArray;
  }

  
  return (
    <div>
      {/* {jsonList()} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home
          jsonList={jsonList()}
          />}/>

          <Route path="/home" element={<Home
          jsonList={jsonList()}
          />}/>
          <Route path="/gamepage" element={<GamePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
