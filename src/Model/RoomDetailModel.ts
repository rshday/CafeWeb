export interface RoomDetailModel {
    id : number;
    name: string;
    image_url: string;
    genre: string;
    branch : BranchModel;
    average_rating : number;
    average_interior_score : number;
    average_story_score : number;
    average_creativity_score : number;
    average_problem_score : number;
    average_equipment_score : number;
    is_liked : boolean;
    difficulty : number;
    fear_degree: number;
    time_duration : number;
  }

  interface BranchModel { //지점 정보
    pk : number;
    name: string;
    address: string;
    average_rating: number;
    booking_link: string;
    brand : BrandModel;
  }

  interface BrandModel{ //브랜드 정보
    pk : number;
    name: string;
    description: string;
    average_rating: number;
  }