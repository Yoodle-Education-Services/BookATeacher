const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema ({
    //Id: Number,
    subject: {
        type: String,
        required: true
    },
    location: String,
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }

}); 

const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {type: Date, default: Date.now}
});

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    /*age: {
        type: String,
        required: true
    },*/
    payRate: {
        type: String,
        required: true
    },
    bioText: String,
    specialities: [String],
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    imageURL: String,

    calendar: [calendarSchema],

    reviews: [reviewSchema]
});

mongoose.model('Teacher', teacherSchema); 

/*const calendarSchema = new mongoose.Schema ({
    studentName: {
        type: String,
        required: true
    },
    teacherName: {
        type: String,
        required: true
    },
    date: {
        type: ISODate,
        required: true,
    },
    time: {
        type: Number,
        required: true
    },
    subject: String
}), 
*/
