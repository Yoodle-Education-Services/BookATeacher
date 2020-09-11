const express = require('express');
const router = express.Router();
const ctrlTeachers = require('../controllers/teachers');
//const ctrlTeacher = require('../controllers/teacherinput');
const crtlCalendar = require('../controllers/calendar');
const ctrlReviews =require('../controllers/reviews');

//teachers
router
    .route('/teachers')
    .get(ctrlTeachers.teacherInfo)
    .post(ctrlTeachers.teachersCreate);

router
    .route('/teachers/:teacherid')
    .get(ctrlTeachers.teachersReadOne)
    .put(ctrlTeachers.teachersUpdateOne)
    .delete(ctrlTeachers.teachersDeleteOne);


//var teachers = require('./controllers/teacherinput.js'); 
//app.use('/teachers', teacherinput);  

//calendar
router
    .route('/teachers/:teacherid/calendar')
    .get(crtlCalendar.calendarCreate);

router
    .route('/teachers/:teacherid:/calendar/:calendarid')
    .get(crtlCalendar.calendarReadOne)
    .put(crtlCalendar.calendarUpdateOne)
    .delete(crtlCalendar.calendarDeleteOne);

//reviews
router
    .route('/teachers/:teacherid/reviews')
    .post(ctrlReviews.reviewsCreate);

router
    .route('/teachers/:teacherid/reviews/:reviewid')
    .get(ctrlReviews.reviewsReadOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;



