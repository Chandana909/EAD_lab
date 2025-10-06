import React from 'react';
import logo from './logo.svg';
import './App.css';
import Props from './props';  // Import the Props component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo and Image */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Display the Props component */}
        <Props />
        
        
      </header>
    </div>
  );
}

export default App;
