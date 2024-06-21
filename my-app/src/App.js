import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import GamePage from './Pages/GamePage'
import Context from './Components/Context'
import Main from './Main';

function App() {
  const [boardGames, setBoardGames] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <Main boardGames={boardGames} setBoardGames={setBoardGames} />
    </div>
  );
}

export default App;
