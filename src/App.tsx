/*eslint-disable*/
import MainView from './View/MainView';
import RoomDetailView from './View/RoomDetailView';
import './Style/Common/app.css'
import './Style/Common/gridContainer.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="gridApp">
        <div className="gridContainer">
          <nav className='TopNav col-12'>
              <Link to={'/'}>Home</Link>
              <Link to={'/profile'}>Profile</Link>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <div className = "LoginContainer">
                  <p>Test_ID</p>
                  <button>Sign in</button>
                  <button>Login</button>
              </div>
          </nav>
          <Routes>
            <Route path='/' element={<MainView/>} />
            <Route path='/detail/:index' element={<RoomDetailView/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
