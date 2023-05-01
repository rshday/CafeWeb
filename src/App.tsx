import React from 'react';
import logo from './logo.svg';
import './Style/App.css';
import RoomModel from './Component/RoomModel';

function App() {
  let rooms = [];
  for(let i = 0; i<30; i++)
  {
    rooms.push(<RoomModel start={1+(i*2)%12} end={3+(i*2)%12} row={3+(i/6)} />);
  }

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
        {rooms}
      </div>
    </div>
  );
}

export default App;
