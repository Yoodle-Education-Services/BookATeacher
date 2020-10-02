/*export class Calendar {
    subject: string;
    location: string;
    startTime: Date;
    endTime: Date;
}*/

export class Review {
    author: string;
    rating: number;
    reviewText: string;
}

export class Teacher {
    _id: string;
    name: string;
    payRate: string;
    bioText: string;
    specialities: string[];
    rating: number;
    imageURL: string;
    //calendar: Calendar[];
    reviews: Review[];
}
