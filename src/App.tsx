/*eslint-disable*/
import MainView from './View/MainView';
import React,{  MouseEventHandler, useState } from 'react';
import RoomDetailView from './View/RoomDetailView';
import './Style/Common/app.css'
import './Style/Common/gridContainer.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HiUserCircle } from "react-icons/hi2";
import { BsFillDoorClosedFill } from "react-icons/bs";

function App() {
  const [userContentDisplay,setUserContentDisplay] = useState("none");
  const [loginDisplay,setLoginDisplay] = useState("none");
  
  function onClickDisplayTogle(target : string , setter : React.Dispatch<React.SetStateAction<string>>) : void
  {
    if(target === "none")
    {
      setter("block")
      return;
    }
    setter("none")
  }

  return (
    <BrowserRouter>
      <div className="gridApp">
        <div className="gridContainer">
          <nav className='TopNav col-12'>
              <Link to={'/'} className='Logo'>
                <BsFillDoorClosedFill className='UserBtn'/>
                Left & Right
              </Link>
              {/* <Link to={'/'}>Home</Link>
              <Link to={'/profile'}>Profile</Link> */}
              <div className='UserContainer' onClick={()=>{onClickDisplayTogle(userContentDisplay,setUserContentDisplay);}}>
                <HiUserCircle className='UserBtn'/>
                <div className='UserContent' style={{display:userContentDisplay}}>
                  <ul><b>회원가입</b></ul>
                  <ul onClick={()=>{setLoginDisplay("block")}}>로그인</ul>
                </div>
              </div>
          </nav>
          <Routes>
            <Route path='/' element={<MainView/>} />
            <Route path='/detail/:index' element={<RoomDetailView/>} />
          </Routes>
        </div>
      </div>
      <div id='modalWrap' style={{display : loginDisplay}}>
          <div id='modalBody'>
            <span className="closeBtn" onClick={()=>{setLoginDisplay("none")}}>&times;</span>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
