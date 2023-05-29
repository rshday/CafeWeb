import React,{  useEffect, useState } from 'react';
import '../Style/Component/ReviewCompoStyle.css'
import { ReviewModel } from '../Model/ReviewModel';


function ReviewCompo({data} : {data:ReviewModel}) {
    const [pointColorArray,setPointColorArray] = useState<Array<string>>(["red","yellow","gray","blue","green"]);

    function getColorIndex(pstr : number) : number
    {
        if(pstr == null)
            return 0;
        const point = parseInt(pstr.toString()[0]);;
        return point - 1;
    }

    useEffect(() => {
        
    },[]);

    return (
        <div id='reviewItemContainer'>
            <img id='userImg' src={data.user.avatar}/>
            <p id='userName'>{data.user.username}</p>
            <div id='pointBoxContainer'>
                <p>종합 평점</p>
                <div className='pointBox' style={{background : pointColorArray[getColorIndex(data.rating)]}}>{data.rating}</div>
                <p>인테리어 평점</p>
                <div className='pointBox' style={{background : pointColorArray[getColorIndex(data.interior_score)]}}>{data.interior_score}</div>
                <p>스토리 평점</p>
                <div className='pointBox' style={{background : pointColorArray[getColorIndex(data.story_score)]}}>{data.story_score}</div>
                <p>창의성 평점</p>
                <div className='pointBox' style={{background : pointColorArray[getColorIndex(data.creativity_score)]}}>{data.creativity_score}</div>
                <p>문제 평점</p>
                <div className='pointBox' style={{background : pointColorArray[getColorIndex(data.problem_score)]}}>{data.problem_score}</div>
                <p>장치 평점</p>
                <div className='pointBox' style={{background : pointColorArray[getColorIndex(data.equipment_score)]}}>{data.equipment_score}</div>
            </div>
        </div>
    );
}

export default ReviewCompo;
