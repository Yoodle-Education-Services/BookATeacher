const mongoose = require('mongoose');

const Teacher = mongoose.Schema('Teacher', {
    teacherName: { type: String },
    teacherSpecialty: { type: String },
    teacherEmail: { type: String },
    teacherPhone: { type: String },
    teacherBio: { type: String }
});

module.exports =  Teacher ;