import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import GamePage from './Pages/GamePage'
import Context from './Components/Context'

const Main = ({ boardGames, setBoardGames }) => (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home
            boardGames={boardGames}
          />}/>

          <Route path="/home" element={<Home
            boardGames={boardGames}
          />}/>
          <Route path="/gamepage" element={<GamePage
            boardGames={boardGames}

          />}/>

          <Route path="/gamepage/:game_uid" element={<GamePage
              boardGames={boardGames}

          />}/>
        </Routes>
      </BrowserRouter>
);

export default Main;