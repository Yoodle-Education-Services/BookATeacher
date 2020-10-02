const mongoose = require('mongoose');
let { response } = require('../../app');
const Tea = mongoose.model('Teacher');

const doAddCalendar = (req, res, teacher) => {
    if (!teacher) {
        res
            .status(404)
            .json({"message": "Teacher not found"});
    } else {
        const {subject, location, startTime, endTime} = req.body;
        teacher.calendar.push({
            subject,
            location,
            startTime,
            endTime
        });
        teacher.save((err, teacher) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } 
            else {
                res
                    .status(200)
                    .json(teacher);
            }
        });
    }
};

const calendarInfo = (req, res) => {  //need to find a REST API to req, res in alphabetical order if possible//
    try{
    
      Tea
      .findById(req.params.teacherid)
      .select('calendar')
      .exec(
        (err, calendarResults) => {
          console.log('entered result list', calendarResults);
          const calendar = calendarResults.calendar;
          console.log("calendar", calendarResults.calendar.id)

          const results = {
            calendarResults: {
              id: req.params.teacherid,
                
            },
            calendar
        };
          res
            .status(200)
            .json(results);
        }
      );
    
    } catch (err) {
      console.log('500');
      console.log(err);
    res
      .status(500)
      .json(err);
  }
    };

const calendarCreate = (req, res) => {
    console.log("Enter Calendar")
    const teacherId = req.params.teacherid;
    console.log("TeacherId", teacherId)
    if (teacherId) {
        Tea 
            .findById(teacherId)
            .select('calendar')
            .exec((err, teacher) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    doAddCalendar(req, res, teacher);
                }
            });
        } else {
            res
                .status(400)
                .json({"message": "Teacher not found"});
        }
};

const calendarReadOne = (req, res) => {
    Tea
        .findById(req.params.teacherid)
        .select('name calendar')
        .exec((err, teacher) => {
            if (!teacher) {
                return res
                    .status(404)
                    .json({
                        "message": "teacher not found"
                    });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            if (teacher.calendar && teacher.calendar.length > 0) {
                const calendar = teacher.calendar.id(req.params.calendarid);
                if (!calendar) {
                    return res
                        .status(400)
                        .json({
                            "message": "calendar not found"
                        });
                } else {
                    response = {
                        teacher : {
                            name : teacher.name,
                            id : req.params.teacherid
                        },
                        calendar
                    };
                    return res
                        .status(200)
                        .json(response);
                }
            } else {
              return res
                .status(404)
                .json({
                    "message": "No calendar found"
                });
            };
        }
    ) 
}; 

const calendarUpdateOne = (req, res) => {
    if (!req.params.calendarid || !req.params.calendarid) {
        return res 
            .status(404)
            .json({
                "message": "Not found, teacherid and calendarid are both required"
            });
        } 
        Tea
          .findById(req.params.teacherid)
          .select('calendar')
          .exec((err, teacher) => {
              if (!teacher) {
                  return res
                    .status(404)
                    .json({
                        "message": "Teacher not found"
                    });
              } else if (err) {
                  return res
                    .status(400)
                    .json(err);
              }
              if (teacher.calendar && teacher.calendar.length > 0) {
                  const thisCalendar = teacher.calendar.id(req.params.calendarid);
                  if (!thisCalendar) {
                      res
                        .status(404)
                        .json({
                            "message": "Calendar not found"
                        });
                  } else {
                      thisCalendar.subject = req.body.subject;
                      thisCalendar.location = req.body.location;
                      thisCalendar.startTime = req.body.startTime;
                      thisCalendar.endTime = req.body.endTime;
                      teacher.save((err, teacher) => {
                          if (err) {
                              res
                                .status(404)
                                .json(err);
                          } else {
                              res
                                .status(204)
                                .json(thisCalendar)
                          }
                      });
                  }
              } else {
                  res
                    .status(404)
                    .json({
                        "message": "No calendar to update"
                    });
                }
            }
        )
    }; 

    const calendarDeleteOne = (req, res) => {
        console.log("Enter Calendar delete")
        const {teacherid, calendarid} = req.params;
        if (!teacherid || !calendarid) {
            return res
                .status(404)
                .json({
                    "message": "Not found, teacherid and calendarid are both required"
                });
        }
        Tea
            .findById(teacherid)
            .select('calendar')
            .exec((err, teacher) => {
                if (!teacher) {
                    return res
                        .status(404)
                        .json({
                            "message": "Teacher not found"
                        });
                } 
                else if (err) {
                    return res
                        .status(400)
                        .json(err);
                }
                if (teacher.calendar && teacher.calendar.length > 0) {
                    console.log("Delete Calendar", teacher.calendar.id(calendarid))
                    if (!teacher.calendar.id(calendarid)) {
                        return res
                            .status(404)
                            .json({
                                "message": "Calendar not found"
                            });
                    } else {
                        teacher.calendar.id(calendarid).remove();
                        teacher.save(err => {
                            if (err) {
                                return res
                                    .status(404)
                                    .json(err);
                            } 
                            else {
                                res
                                    .status(204)
                                    .json(null)
                            }
                        });
                    }
                } else {
                    res
                        .status(404)
                        .json({
                            "message": "No calendar to delete"
                        });
                }
            });
    };
 module.exports = {
    calendarInfo,
    calendarCreate,
    calendarReadOne,
    calendarUpdateOne,
    calendarDeleteOne
};   
