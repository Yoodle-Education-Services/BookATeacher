const mongoose = require('mongoose');

const Teacher = mongoose.model('Teacher', {
    name: { type: Text },
    email: { type: Text },
    phone: { type: Number },
    preferredContactMethod: { type: Text},
    specialty: { type: Text },
    payRate: { type: Number },
    bio: { type: String }
});

module.exports = { Teacher };