import express from 'express';
import bcrypt from 'bcrypt'

import User from '../database/models/users.js'

import { createResponse, createErrorResponse } from '../utils/response.js';
import { createToken, invalidateToken } from '../utils/jwt.js';

export const authRouter = express.Router();
authRouter.post('/auth/signup', signUp);
authRouter.post('/auth/login', logIn);
authRouter.post('/auth/logout', logout);

export default authRouter;

async function signUp(req, res){
    console.log('signUp : ', req.body);

    try{
        req.body.salt = await bcrypt.genSalt();
        req.body.hashedPassword = await bcrypt.hash(req.body.password, req.body.salt);

        const user = new User(req.body);
        const response = await user.save();
        console.log("Save successful", response)
        res.send(createResponse({
            _id: user._id,
            email: user.email,
            name: user.name,
            description: user.description,
            thumbnail: user.thumbnail,
        }, createToken(user)));

    } catch (error) {
        console.log(error.code, error.message)
        res.send(createErrorResponse(error));
    }
}

async function logIn(req, res){
    console.log('login:', req.body);
    try {
        const user = await User.findOne({email: req.body.email});
        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.hashedPassword);
            if (validPassword) {
                res.send(createResponse({
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    description: user.description,
                    thumbnail: user.thumbnail,
                }, createToken(user)))
            } else {
                throw new Error('Invalid Password');
            }
        } else {
            throw new Error('Invalid Email');
        }
    } catch (error){
        console.log('Error:', error.message);
        res.send(createErrorResponse(error));
    }
}

function logout(req, res){
    console.log('/logout:', req.headers, req.body);
    try{
        return invalidateToken(req.headers.authorization)
    }catch(error){
        console.log('Error:', error.message);
        res.send(createErrorResponse(error));
    }
}