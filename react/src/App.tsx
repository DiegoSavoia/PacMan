import React from 'react';
import HomePage from './HomePage';
import TopBar from './TopBar';
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
    </div>
  );
}

export default App;
