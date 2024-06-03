const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDb connected");
    }catch(error){
        console.error('MongoDb connected failed:',error.message);
        process.exit(1);
    }
};

module.exports = connectDb;