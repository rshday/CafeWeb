import axios from 'axios';
import { RoomDetailModel } from '../Model/RoomDetailModel';
import { ReviewModel } from '../Model/ReviewModel';

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
        this.getReviewData();
    }
    

    async getRoomDetailData()
    {
        try{
            const res = await axios.get<RoomDetailModel>('/api/v1/rooms/'+this.index);
            this.state.setRoomDetailModel(res.data);
            console.log(res.data)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    async getReviewData()
    {
        try{
            const res = await axios.get<ReviewModel>('/api/v1/rooms/'+this.index+'/reviews');
            this.state.setReviewModels(res.data);
            console.log(res.data)
        }
        catch(error)
        {
            console.log(error)
        }
    }
}