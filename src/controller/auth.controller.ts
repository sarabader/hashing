import { Prisma, User } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as argon2 from 'argon2'


export const loginHandler=async(req:Request,res:Response)=>{
        const { username, password } = req.body as User;
        const user = await prisma.user.findFirst({
        where: { username },
        });
        if (!user) {
            return res.status(400).json({
            message: 'Worng username and password'
        });
        };
        const isVaildPassword = await argon2.verify(user.password,password)
        if (!isVaildPassword) {
            return res.status(200).json({
                message: 'Welcome back'
            });
        };
        return res.status(200).json({
            message: 'Welcome back'
        });
        };



export const registerHandler = async (req:Request, res:Response) => {
    try {
    const newUser = req.body as User;
    const hashedPassword = await argon2.hash(newUser.password)
    newUser.password = hashedPassword;
    await prisma.user.create({
    data: newUser,
    });
    return res.status(400).json({
    message: 'welcome to the website !'
    });
} catch (error) {
    console.log(error)
    const prismaError = error as PrismaClientKnownRequestError
    return res.status(400).json({
        message: prismaError.message,
        });
}
};