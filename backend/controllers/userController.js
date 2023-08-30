import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from '../utils/jwt.js';

// login con
// @access  public
const authUser = asyncHandler(async  (req,res) => {
   const { email, password } = req.body;
   const user = await User.findOne({email});
   if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id );
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email:user.email,
    });
} else {
    res.status(400);
    throw new Error('Invalid email or password');
}

});

// @access  public
const registerUser = asyncHandler(async  (req,res) => {

    const {name, email, password} = req.body;
   
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User Already Exists');
    }

    const createUser = await User.create({name,email,password});
    if (createUser) {
        generateToken(res, createUser._id );
        res.status(201).json({
            _id: createUser._id,
            name: createUser.name,
            email:createUser.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid User Data');
    }
});

// @access  private
const logoutUser = asyncHandler(async  (req,res) => {
    res.cookie('jwt', '', { 
        httpOnly: true,
        expires: new Date(0) 
    });
    res.status(200).json({message:'User logged out'});
});

// @access  private
const getUserProfile = asyncHandler(async  (req,res) => {
    res.status(200).json({message: "profile of user"});
}); 

// @access  private
const updateUserProfile = asyncHandler(async  (req,res) => {
    res.status(200).json({message: "update user profile"});
});

export {
    
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile

};
