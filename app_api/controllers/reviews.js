const mongoose = require('mongoose');
let { response } = require('../../app');
const Tea = mongoose.model('Teacher');

const doSetAverageRating = (teacher) => {
    if (teacher.reviews && teacher.reviews.length > 0) {
        const count = teacher.reviews.length;
        const total = teacher.reviews.reduce((acc, {rating}) => {
            return acc + rating;
        }, 0);

        teacher.rating = parseInt(total / count, 10);
        teacher.save(err => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Average rating updated to ${teacher.rating}`);
            }
        });
    }
};
const updateAverageRating = (teacherId) =>
    Tea.findById(teacherId)
        .select('rating reviews')
        .exec((err, teacher) => {
            if (!err) {
                doSetAverageRating(teacher);
            }
        });
       

const doAddReview = (req, res, teacher) => {
    if (!teacher) {
        res
            .status(404)
            .json({"message": "Teacher not found"});
    } else {
        const {author, rating, reviewText} = req.body;
        teacher.reviews.push({
            author,
            rating,
            reviewText
        });
        teacher.save((err, teacher) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                updateAverageRating(teacher._id);
                const thisReview = teacher.reviews.slice(-1).pop();
                res
                    .status(201)
                    .json(thisReview);
            }
        });
    }
};

const reviewsCreate = (req, res) => {
    const teacherId = req.params.teacherid;
    if (teacherId) {
        Tea 
            .findById(teacherId)
            .select('reviews')
            .exec((err, teacher) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    doAddReview(req, res, teacher);
                }
            });
        } else {
            res
                .status(400)
                .json({"message": "Teacher not found"});
        }
};

const reviewsReadOne = (req, res) => {
    Tea
        .findById(req.params.teacherid)
        .select('name reviews')
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
            if (teacher.reviews && teacher.reviews.length > 0) {
                const review = teacher.reviews.id(req.params.reviewid);
                if (!review) {
                    return res
                        .status(400)
                        .json({
                            "message": "review not found"
                        });
                } else {
                    response = {
                        teacher : {
                            name : teacher.name,
                            id : req.params.teacherid
                        },
                        review
                    };
                    return res
                        .status(200)
                        .json(response);
                }
            } else {
              return res
                .status(404)
                .json({
                    "message": "No reviews found"
                });
            };
        }
    ) 
}; 

const reviewsUpdateOne = (req, res) => {
    if (!req.params.teacherid || !req.params.reviewid) {
        return res 
            .status(404)
            .json({
                "message": "Not found, teacherid and reviewid are both required"
            });
        } 
        Tea
          .findById(req.params.teacherid)
          .select('reviews')
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
              if (teacher.reviews && teacher.reviews.length > 0) {
                  const thisReview = teacher.reviews.id(req.params.reviewid);
                  if (!thisReview) {
                      res
                        .status(404)
                        .json({
                            "message": "Review not found"
                        });
                  } else {
                      thisReview.author = req.body.author;
                      console.log("rating", req.body.rating);
                      thisReview.rating = req.body.rating;
                      thisReview.reviewText = req.body.reviewText;
                      teacher.save((err, teacher) => {
                          if (err) {
                              res
                                .status(404)
                                .json(err);
                          } else {
                              updateAverageRating(teacher._id);
                              res
                                .status(200)
                                .json(thisReview);   

                          }
                      });
                  }
              } else {
                  res
                    .status(404)
                    .json({
                        "message": "No review to update"
                    });
                }
            }
        )
    }; 

    const reviewsDeleteOne = (req, res) => {
        const {teacherid, reviewid} = req.params;
        if (!teacherid || !reviewid) {
            return res
                .status(404)
                .json({
                    "message": "Not found, teacherid and reviewid are both required"
                });
        }
        Tea
            .findById(teacherid)
            .select('reviews')
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
                if (teacher.reviews && teacher.reviews.length > 0) {
                    if (!teacher.reviews.id(reviewid)) {
                        return res
                            .status(404)
                            .json({
                                "message": "Review not found"
                            });
                    } else {
                        teacher.reviews.id(reviewid).remove();
                        teacher.save(err => {
                            if (err) {
                                return res
                                    .status(404)
                                    .json(err);
                            } else {
                                updateAverageRating(teacher._id);
                                res
                                    .status(204)
                                    .json(null);
                            }
                        });
                    }
                } else {
                    res
                        .status(404)
                        .json({
                            "message": "No review to delete"
                        });
                }
            });
    };


module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
}; 