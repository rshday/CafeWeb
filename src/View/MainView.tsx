/*eslint-disable*/
import React,{  useEffect, useState } from 'react';
import '../Style/View/MainViewStyle.css';
import MainViewModel from '../ViewModel/MainViewModel'

function MainView() {
    const [rooms,setRooms] = useState();

    const state = {
        rooms : rooms,
        setRooms : setRooms,
    }

    const vm = new MainViewModel(state);
    
    useEffect(() => {
        vm.initial();
    });

    return (
        <div className='gridPage'>
            <div className='Title col-12'>Left & Right</div>
            {rooms}
        </div>
    );
}

export default MainView;