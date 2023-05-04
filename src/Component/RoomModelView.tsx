import React from 'react';
import '../Style/RoomModelView.css'
import { RoomModel } from './../Model/RoomModel';

function RoomModelView({data} : {data:RoomModel}) {
  return (
    <div className="RoomModel col-2">
      <div className="RmTitle">{data.name}</div>
      <img className='RmImg' alt="none" src={data.image_url}/>
      
      <p>사용자 총 평점 : <b>{data.average_rating}</b> / <b>5</b></p>
    </div>
  );
}

export default RoomModelView;
