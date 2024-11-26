import { Request, Response } from "express";
import asyncHandler from 'express-async-handler'
import User from "../Model/userModal";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { error } from "console";



interface AuthenticatedRequest extends Request {
    user?: {
        _id: string;
        name: string;
        email: string;
    };
}


export const addNewUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Provide all required fields : name ,email , password.")
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
        res.status(400);
        throw new Error("User already exists with this email..!")
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        image: ''
    });

    if (newUser) {

        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET || 'default_secret',
            { expiresIn: '1d' }
        );

        res.status(200).json({ message: 'User registered successfully..!', user: { id: newUser._id, name: newUser.name, email: newUser.email, token } })
    } else {
        res.status(400);
        throw new Error("Invalid user data....!")
    }
});


export const loginUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Please provide both email and password...!")
    }

    const user = await User.findOne({ email })
    
    if (!user) {
        res.status(400);
        throw new Error('Invalid email')
    } 

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        res.status(401);
        throw new Error('Invalid Password...!')
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET || 'defult_secret',
        { expiresIn: '1d' }
    );

    res.status(200).json({message : 'User Login Succssufully..!' ,id : user._id ,name : user.name , email : user.email , token})
})


export const allUsers = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const keyWord = req.query.search
        ? {
            $or: [
            {name : {$regex : req.query.search , $options : 'i'}},
            {email : {$regex : req.query.search , $options : 'i'}},
        ]
    } : {}

    if (!req.user) {
        res.status(401).json({ message: "User not authenticated" });
        return;
    }

    const users = await User.find(keyWord).find({ _id: { $ne: req.user._id } });
    res.send(users);
});