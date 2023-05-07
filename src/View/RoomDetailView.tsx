/*eslint-disable*/
import '../Style/View/RoomDetailStyle.css';
import React,{  useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import RoomDetailViewModel from '../ViewModel/RoomDetailViewModel';


function RoomDetailView() {
    const { index } = useParams();
    const [img,setImg] = useState();
    const [title,setTitle] = useState();

    const state = {
        img : img,
        setImg : setImg,
        title : title,
        setTitle : setTitle,
    }

    const vm = new RoomDetailViewModel(state,index);

    useEffect(() => {
        vm.initial();
    });

    return (
        <div className='gridPage'>
            <div className='topItem imgBox'>
                <img className='mainImg' src={img}/>
            </div>
            <div className='detailContainer topItem'>
                <p id = "title">{title}</p>
                <p id = "adress">서울시 강남구 테헤란로6길 30(역삼동, 지하1층)</p>
                <p id = "point">사용자 평점 : 4 / 5</p>
                <div className='pointBox'>
                    <p>인테리어 점수 : 4 / 5</p>
                    <p>스토리 점수 : 4 / 5</p>
                    <p>창의성 점수 : 4 / 5</p>
                    <p>문제 점수 : 4 / 5</p>
                    <p>장치 점수 : 4 / 5</p>
                </div>
            </div>
        </div>
    );
}

export default RoomDetailView;