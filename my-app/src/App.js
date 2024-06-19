import './App.css';
import axios from 'axios';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import GamePage from './Pages/GamePage'

function App() {
  function jsonList(){
    const jsonArray = [];
    const populateData = (data) => {jsonArray.push(data)};
    axios.get(`https://hl2qrc5x51.execute-api.us-west-1.amazonaws.com/dev/boardgames`)
    .then(response => {
    
      // handle the response
        const jsonData = response.data; // object file
        // console.log(jsonData);
        const result = jsonData.boardgames.result;
        for (let i = 0; i < result.length; i++) {
          populateData(jsonData.boardgames.result[i]); 
        }
        // console.log("result: ", result);
    })
    console.log("jsonArray: ", jsonArray)
    return jsonArray;
  }

  
  return (
    <div>
      {jsonList()}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/home" element={<Home/>}/>
          <Route path="/gamepage" element={<GamePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
