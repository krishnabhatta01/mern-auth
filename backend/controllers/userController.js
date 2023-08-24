import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async  (req,res) => {
    res.status(200).json({message: "Auth user"});
});

const registerUser = asyncHandler(async  (req,res) => {
    res.status(200).json({message: "register user"});
});

const logoutUser = asyncHandler(async  (req,res) => {
    res.status(200).json({message: "logout user"});
});

const getUserProfile = asyncHandler(async  (req,res) => {
    res.status(200).json({message: "profile of user"});
});

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
