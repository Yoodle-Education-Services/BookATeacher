const express = require('express');
var router = express.Router(); 

const { isValidObjectId } = require('mongoose');
const Teacher = require('../models/teacherinput');

router.get('/', (req, res) => {
    Teacher.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieving Teacher :' + JSON.stringify(err, undefined, 2)); }
    });
});     


router.get('/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${rq.params.id}`);
        
    Teacher.findById(req.params.id, (err,doc) =>{});
    
});

router.post('/',(req, res) => {
    var tea = new Teacher({
        name: req.body.name,
        specialty: req.body.specialty,
        email: req.body.email,
        phone: req.body.phone,
        bio: req.body.bio,
    });
    tea.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Teacher Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id' , (req, res) => {
    if (ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
})

module.exports = router;