import React from 'react';
import '../Style/Component/MainRoomCompoStyle.css'
import { RoomModel } from '../Model/RoomModel';
import { AiFillStar,AiFillHeart } from "react-icons/ai";

function MainRoomCompo({data, onClick} : {data:RoomModel, onClick : () => void}) {
  return (
    <div className="RoomModel col-2" onClick={onClick}>
      <div className='ImageContaner'>
        <AiFillHeart className='hearIcon'/>
        <img className='RmImg' alt="none" src={data.image_url}/>
      </div>
      <div className='RmTitleContainer'>
        <div className="RmTitle">{`${data.name}`}</div>
        <div className='RmRateContainer'>
          <AiFillStar/>
          <p className='RmRate'>{`${data.average_rating}.00`}</p>
        </div>
      </div>
      <div className="RmBrand">{`${data.branch.brand.name}(${data.branch.name})`}</div>
      
    </div>
  );
}

export default MainRoomCompo;
