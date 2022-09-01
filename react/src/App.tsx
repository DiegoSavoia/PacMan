import React from 'react';
import HomePage from './HomePage';
import TopBar from './componentes/TopBar';
import Back from './componentes/Back';

function App() {
  return (
    <div className="App">
    <TopBar/>
    <HomePage />
    <Back/>
    </div>
  );
}

export default App;
