export interface ReviewModel {
    rating : number;
    interior_score : number;
    story_score : number;
    creativity_score : number;
    problem_score : number;
    equipment_score : number;
    user : userModel;
}

interface userModel{
    name: string;
    avatar : string;
    username : string;
}
