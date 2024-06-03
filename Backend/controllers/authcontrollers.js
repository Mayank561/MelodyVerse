const jwt = require('jsonwebtoken');
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

exports.signup = async (req, res)=>{
    const { username, email, password, name, profilePicture} = req.body;

    try{
        const UserExists = await User.findOne({email});
        if(UserExists){
            return res.status(400).json({message:'email already exists'});

        }
        const user = await User.create({
            username,
            email,
            password,
            name,
            profilePicture,
        });

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn:'1h'});
        res.status(201).json({message: 'User registration successfully', token});

    }catch(error){
        res.status(500).json({message: error.message});
    }
};

