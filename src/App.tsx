import React from 'react';
import logo from './logo.svg';
import './Style/App.css';
import RoomModel from './Component/RoomModel';

function App() {
  let rooms = [];
  for(let i = 0; i<31; i++)
  {
    rooms.push(<RoomModel/>);
  }

  return (
    <div className="App">
      <div className="AppContainer">
        <div className='TopNav col-12'>
          <ul>Home</ul>
          <ul>Profile</ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <div className = "LoginContainer">
            <p>Test_ID</p>
            <button>Sign in</button>
            <button>Login</button>
          </div>
        </div>
        <div className='Title col-12'>Left & Right</div>
        {rooms}
      </div>
    </div>
  );
}

export default App;
