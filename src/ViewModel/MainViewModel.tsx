/*eslint-disable*/
import axios from 'axios';
import { RoomModel } from '../Model/RoomModel';
import MainRoomCompo from '../Component/MainRoomCompo';
import { useNavigate } from 'react-router-dom';

export default class MainViewModel
{
    state: any;
    navigator = useNavigate();

    constructor(state : any)
    {
        this.state = state;
    }
    
    initial()
    {
        this.getRoomdata();
    }
    

    async getRoomdata()
    {
        const res = await axios.get<RoomModel[]>('/api/v1/rooms');
        const temp:Array<JSX.Element> = [];
        let index = 0;

        res.data.forEach(rm=>{
            temp.push(<MainRoomCompo key={`rm${index++}`} data={rm} onClick={
                ()=>{
                    this.navigator("/detail/" + rm.pk);
                }} />);
        });
        this.state.setRooms(temp);
    }
}