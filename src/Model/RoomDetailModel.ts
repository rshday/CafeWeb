export interface RoomDetailModel {
    pk : number;
    name: string;
    image_url: string;
    genre: string;
    branch : BranchModel;
    average_rating : string
  }

  interface BranchModel {
    name: string;
    address: string;
  }