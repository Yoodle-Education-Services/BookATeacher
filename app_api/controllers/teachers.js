const mongoose = require('mongoose');
const Tea = mongoose.model('Teacher');


/*const teacherInfo = (req, res) => {
    Tea ({
        name: req.body.name,
        payRate: req.body.payRate,
        bioText: req.body.bioText,
        specialities: req.body.specialities.split(","),
    });

}; (err, teacher) => {
    if(err) {
        res
            .status(400)
            .json(err);
    } else {
        res 
            .status(201)
            .json(teacher);
    }
}*/
    

const teachersCreate = (req, res) => { 
    Tea.create({
        name: req.body.name,
        //age: req.body.age,
        payRate: req.body.payRate,
        bioText: req.body.bioText,
        specialities: req.body.specialities.split(","),
    
    }, (err, teacher) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(teacher);
           }  
        }
    )
};


const teachersReadOne = (req, res) => {
    Tea
        .findById(req.params.teacherid)
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
            } else {
            res
                .status(200)
                .json(teacher);
            }    
        });
}; 

const teachersUpdateOne = (req, res) => {
    if (!req.params.teacherid) {
        return res
            .status(404)
            .json({
                "message": "Not found teacherid required"
            });
    }
    Tea
        .findById(req.params.teacherid)
        .select('-reviews -rating')
        .exec((err, teacher) => {
            if (!teacher) {
                return res
                    .status(404)
                    .json({
                        "message": "teacherid not found"
                    });
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            teacher.name = req.body.name;
            //teacher.age = req.body.age;
            teacher.payRate = req.body.payRate;
            teacher.bioText = req.body.bioText;
            teacher.specialities = req.body.specialities.split(',');

            teacher.save((err, tea) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(tea);
                }
            });
        }
    );
};

const teachersDeleteOne = (req, res) => {
    const {teacherid} = req.params;
    if (teacherid) {
        Tea
            .findByIdAndRemove(teacherid)
            .exec((err, teacher) => {
                if (err) {
                    return res 
                        .status(404)
                        .json(err);
                }
                res
                    .status(204)
                    .json(null);
            }
        );
    } else {
        res
            .status(404)
            .json({
                "message": "No teacher"
            });
    }
};

module.exports = {
    teachersCreate,
    teachersReadOne,
    teachersUpdateOne,
    teachersDeleteOne
};