const mongoose = require('mongoose');
const teacherForm = require('../models/teacherForm');

const { Teacher } = require('../models/teacherForm');


router.get('/', (req, res) => {
    Teacher.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Teacher :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Teacher.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Teacher :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/newTeachers', (req, res) => {
    var emp = new Teacher({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        specialties: req.body.specialties,
        payRate: req.body.payRate,
        bioText: req.body.bioText,
    });
    tea.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Teacher Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    const tea = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        specialties: req.body.specialties,
        payRate: req.body.payRate,
        bioText: req.body.bioText,
    };
    Teacher.findByIdAndUpdate(req.params.id, { $set: tea }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Teacher in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Teacher.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Teacher Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;