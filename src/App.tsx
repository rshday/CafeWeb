import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <div className='TopNav'>
          <ul>Home</ul>
          <ul>Test1</ul>
          <ul>Test2</ul>
          <ul>Profile</ul>
          <div className = "LoginContainer">
            <p>Test_ID</p>
            <button>Sign in</button>
            <button>Login</button>
          </div>
        </div>
        <div className='Title'>Left & Right</div>
      </div>
    </div>
  );
}

export default App;
