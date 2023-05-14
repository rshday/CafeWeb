/*eslint-disable*/
import React,{  useEffect, useState } from 'react';
import '../Style/View/MainViewStyle.css';
import MainViewModel from '../ViewModel/MainViewModel'
import FilterCompo from '../Component/FilterCompo';

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
            <FilterCompo/>
            {rooms}
        </div>
    );
}

export default MainView;