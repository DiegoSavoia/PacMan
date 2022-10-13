import React from 'react';
import HomePage from './HomePage';
import TopBar from './componentes/TopBar';
import Back from './componentes/Back';
import Login from './Login';
import Score from './Score';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuSkins from './MenuSkins';


function App() {

  return (
    <div className="App">
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/Menuskins" element={<MenuSkins />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Score" element={<Score />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/*<Back />*/}
    </div>
  );
}

export default App;
