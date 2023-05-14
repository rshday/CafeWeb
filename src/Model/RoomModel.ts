export interface RoomModel {
    pk : number;
    name: string;
    image_url: string;
    genre: string;
    branch : BranchModel;
    average_rating : string;
    difficulty : string;
    time_duration : string;
  }

  interface BranchModel {
    pk : number;
    name: string;
    address: string;
    brand : BrandModel;
  }

  interface BrandModel {
    pk : number;
    name: string;
    description: string;
    average_rating: string;
  }