import React from 'react';
import '../Style/RoomModelView.css'
import { RoomModel } from './../Model/RoomModel';

function RoomModelView({data} : {data:RoomModel}) {
  return (
    <div className="RoomModel col-2">
      <div className="RmTitle">{data.name}</div>
      <img className='RmImg' alt="none" src={data.image_url}/>
      <p>서울시 용산구</p>
      <p>평점 : 10</p>
    </div>
  );
}

export default RoomModelView;
