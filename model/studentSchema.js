const Mongoose = require('mongoose');

const StudentModel = Mongoose.model('student', {
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
    },
    country:{
        type: String,
        default: "Nigeria"
    }
});

module.exports = { StudentModel }