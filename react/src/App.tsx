import React from 'react';
import HomePage from './HomePage';
import TopBar from './componentes/TopBar';
import Back from './componentes/Back';
import Login from './login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuSkins from './MenuSkins';
import Score from './score';

function App() {

  return (
    <div className="App">
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/menuskins" element={<MenuSkins />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </BrowserRouter>
      {/*<Back />*/}
    </div>
  );
}

export default App;
