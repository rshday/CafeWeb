/*eslint-disable*/
import React,{  useEffect, useState } from 'react';
import './Style/App.css';
import RoomModelView from './Component/RoomModelView';
import axios from 'axios';
import { RoomModel } from './Model/RoomModel';

function App() {
  let [rooms,set_rooms] = useState(Array<JSX.Element>);

  useEffect(() => {
    axios.get<RoomModel[]>('/api/v1/rooms')
    .then(reponse => {
      const result = reponse.data;
      const temp:Array<JSX.Element> = [];
      result.forEach(rm=>{
        temp.push(<RoomModelView data={rm}/>);
      });
      set_rooms(temp);
    })
    .catch(error => console.log(error));
  }, []);

  // for(let i = 0; i<31; i++)
  // {
  //   rooms.push(<RoomModel/>);
  // }

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
