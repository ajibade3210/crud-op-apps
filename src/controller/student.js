const {StudentModel} = require('../../model/studentSchema');

//Home Endpoint
 const getHomePage = async(req, res) =>{
    res.send('Welcome To Zuri Student Register: Register Your Student Login by Filling Your firstName, lastname, email and country')
 }

//read Operation
const  getStudents = async(req, res) => {
    try{
        const result = await StudentModel.find();
        res.send(result);
    } catch(error) {
        res.status(500).send('Unable To Get Student List At The Moment Please Check Connection')
    }
}

//create Operation
const createStudent = async(req, res) => {
    try{
        const student = new StudentModel(req.body);
        const result = await student.save();
        // res.send(result);
        res.json({
            result: result,
            status: 200,
            message: 'User Created',
        })
    } catch(error) {
        res.status(500).send('Two accounts cannot have the same email address');
        console.log(error)
    }
}

//getId
const getStudent =  async (req, res) => {
    try{
        const student = await StudentModel.findById(req.params.id);
        res.json({
            result: student,
            status: 200,
            message: 'Student Data',
        })
    } catch(error) {
        res.status(500).send('Can Not Fetch This Student Id');
    }
}



//Update Operation
const updateStudent = async(req, res) => {
    try{
        const student = await StudentModel.findByIdAndUpdate(req.params.id).exec();
        student.set(req.body);
        const result = await student.save();
        res.json({
            result: result,
            status: 200,
            message: 'Student Data Updated Successfully'
        })
    } catch(error){
        res.status(500).send('Change Student Email');
    }
}

//delete Operation
const deleteStudent =  async(req, res) => {
    try{
        const result = await StudentModel.findByIdAndDelete({_id: req.params.id}).exec();
        res.send('Student Details Have Been Deleted!!');
    } catch(error){
        res.status(500).send('Student Details Have Not Been Deleted!!');
    }
}



module.exports = {
    getHomePage,
    getStudents,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
}