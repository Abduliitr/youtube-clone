import jwt from 'jsonwebtoken';

const mysecret = process.env.JWTKEY || 'mysecret';

const createToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
            name: user.name
        },
        mysecret    
    );
}

const verifyToken = (token) => {
    return jwt.verify(token, mysecret);
}

const invalidateToken = (token) => {
    return jwt.invalidateToken(token);
}

export { createToken, verifyToken, invalidateToken };