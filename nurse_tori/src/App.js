import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeartBeat from './components/HeartBeat.jsx'
import Hero from './components/Hero';
import NavBar from './components/navigation/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='row'>
      </div>
      <Hero />
      {/* <HeartBeat /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <p>
          Hi I'm Tori Stevulak <span smaller>BSN</span>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
