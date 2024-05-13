import React from 'react';
import Navigation from './components/Navigation';
import './App.css';
import Team from './components/Team';
import Membership from './components/Membership';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Team/>
      <Membership/>
    </div>
  );
}

export default App;
