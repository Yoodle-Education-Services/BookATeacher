const express = require('express');
const router = express.Router();
const ctrlTeachers = require('../controllers/teachers');
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

//calendar
/*router
    .route('/teachers/:teacherid/calendar')
    .post(crtlCalendar.calendarCreate);

router
    .route('/teachers/:teacherid:/calendar/:calendarid')
    .get(crtlCalendar.calendarReadOne)
    .put(crtlCalendar.calendarUpdateOne)
    .delete(crtlCalendar.calendarDeleteOne);*/

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



