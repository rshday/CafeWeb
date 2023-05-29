/*eslint-disable*/
import '../Style/View/RoomDetailStyle.css';
import React,{  useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import RoomDetailViewModel from '../ViewModel/RoomDetailViewModel';
import { RoomDetailModel } from '../Model/RoomDetailModel';
import { ReviewModel } from '../Model/ReviewModel';
import ReviewCompo from '../Component/ReviewCompo'

function RoomDetailView() {
    const { index } = useParams();
    const [roomDetailModel,setRoomDetailModel] = useState<RoomDetailModel>();
    const [reviewModels,setReviewModels] = useState<Array<ReviewModel>>();

    const state = {
        roomDetailModel : roomDetailModel,
        setRoomDetailModel : setRoomDetailModel,
        reviewModels : reviewModels,
        setReviewModels : setReviewModels,
    }

    const vm = new RoomDetailViewModel(state,index);
    
    
    useEffect(() => {
        vm.initial();
    },[]);

    return (
        <div className='gridPage'>
            <div className='topItem imgBox'>
                <img className='mainImg' src={roomDetailModel?.image_url}/>
            </div>
            <div className='detailContainer topItem'>
                <div id='topRowContainer'>
                    <div id='titleContainer'>
                        <p id = "title">{roomDetailModel?.name}</p>
                        <div className='genreBox'>탐험</div>
                    </div>
                    <div id='wishAddBtn'>위시리스트 추가</div>
                </div>
                <div className='bar' style={{margin : "1rem"}}></div>
                <div id='brandContainer'>
                    <div id='brandInfo'>
                        <p>{roomDetailModel?.branch.brand.name} - {roomDetailModel?.branch.name}</p>
                        <p>{roomDetailModel?.branch.address}</p>
                        <p></p>
                        <p>브랜드 평가 : {roomDetailModel?.branch.brand.average_rating} / 지점 평가 : {roomDetailModel?.branch.average_rating}</p>
                    </div>
                    <div id='brandBtnContainer'>
                        <a id='bookBtn' href={roomDetailModel?.branch.booking_link}>예약하기</a>
                    </div>
                </div>
            </div>
            <div id='userContentContainer'>
                <div id='inputContainer'>
                    <label htmlFor="point1-select">종합 평점</label>
                    <select name="pets" id="point1-select">
                        <option value="" disabled selected>선택</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label htmlFor="point2-select">인테리어 평점</label>
                    <select name="pets" id="point2-select">
                        <option value="" disabled selected>선택</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label htmlFor="point3-select">스토리 평점</label>
                    <select name="pets" id="point3-select">
                        <option value="" disabled selected>선택</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label htmlFor="point4-select">창의성 평점</label>
                    <select name="pets" id="point4-select">
                        <option value="" disabled selected>선택</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label htmlFor="point5-select">문제 평점</label>
                    <select name="pets" id="point5-select">
                        <option value="" disabled selected>선택</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label htmlFor="point6-select">장치 평점</label>
                    <select name="pets" id="point6-select">
                        <option value="" disabled selected>선택</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div id='pointInputBtn'>평가 등록</div>
                </div>
                <div className='bar'></div>
                <div id='reviewContainer'>
                    {reviewModels?.map((item,index)=>(
                        <ReviewCompo data={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RoomDetailView;