const express = require('express');
const router = express.Router();
const {StudentModel} = require('../model/studentSchema');
const studentController = require('../src/controller/student')
// console.log(studentController)


//student routes
router.get('/', studentController.getHomePage)

router.get('/api/student', studentController.getStudents  )

router.post('/api/student', studentController.createStudent)

router.get('/api/student/:id', studentController.getStudent)

router.put('/api/student/:id', studentController.updateStudent);

router.delete('/api/student/:id', studentController.deleteStudent)





module.exports = router;