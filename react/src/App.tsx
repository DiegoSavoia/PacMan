import React from 'react';
import HomePage from './HomePage';
import TopBar from './componentes/TopBar';
import Back from './componentes/Back';
import Login from './login';

function App() {

  if(true)
    return (
      <Login />
    )
  return (
    <div className="App">
    <TopBar/>
    <HomePage />
    <Back/>
    </div>
  );
}

export default App;
