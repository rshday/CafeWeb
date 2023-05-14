/*eslint-disable*/
import React,{  useEffect, useState } from 'react';
import '../Style/Component/filterCompo.css';

function FilterCompo() {
    
    const locals = [
        "서울전체","강남구","강동구","강북구","강서구",
        "관악구","광진구","구로구","금천구","노원구",
        "도봉구","동대문구","동작구","마포구","서대문구",
        "서초구","성동구","성북구","송파구","양천구",
        "영등포구","용산구","은평구","종로구","중구","중랑구"
    ]; 

    const [localItems,setLocalItems] = useState(new Array<JSX.Element>());

    useEffect(() => {
        const temp:Array<JSX.Element> = [];
        locals.forEach(local=>{
            temp.push
            (
                <label className="FilterItemContainer">
                    <input type="checkbox"/>
                    {`${local}`}
                </label>
            );
        });
        setLocalItems(temp);
    });

    return (
        <div className='FilterContainer'>
            <nav className='FilterTopNav'>
                <ul style={{borderRight : "1px solid rgb(120, 120, 120)"}}>지역별</ul>
                <ul>장르별</ul>
            </nav>
            <div className='FilterContent'>
                {localItems}
            </div>
        </div>
    );
}

export default FilterCompo;