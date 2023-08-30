import jwt from 'jsonwebtoken';

const generateToken = (req, res, userId) => {
    const token = jwt.sign({ userId} , process.env.JWT_SECRET,{
        expiresIn:'30d',
    });

    res.cookie('jwt', token , {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge:86400
    })
};

export default generateToken;