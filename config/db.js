const Mongoose = require('mongoose');


const connectDB = async ()=> {
 try{
const conn = await Mongoose.connect( process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
console.log('MongoDB Connected ')
} catch(err) {
console.log(err);
process.exit(1);
}
}

module.exports = connectDB