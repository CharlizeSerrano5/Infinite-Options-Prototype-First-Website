import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'

import GamePage from './Pages/GamePage'

function App() {
  return (
    <div>
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
