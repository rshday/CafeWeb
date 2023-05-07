import axios from 'axios';
import { RoomDetailModel } from '../Model/RoomDetailModel';

export default class RoomDetailViewModel{
    state: any;
    index: string | undefined;

    constructor(state : any, index: string | undefined)
    {
        this.state = state;
        this.index = index;
    }

    initial()
    {
        this.getRoomDetailData();
    }
    

    async getRoomDetailData()
    {
        const res = await axios.get<RoomDetailModel>('/api/v1/rooms/'+this.index);
        this.state.setImg(res.data.image_url);
        this.state.setTitle(res.data.name);
    }
}