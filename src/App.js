import React from 'react';
import Navigation from './components/Navigation';
import './App.css';
import Team from './components/Team';
import Membership from './components/Membership';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Team/>
      <Membership/>
      <Features/>
    </div>
  );
}

export default App;
