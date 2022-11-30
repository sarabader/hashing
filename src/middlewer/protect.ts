import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken'
interface IUser{
    id:string;
    role:string;
    iat:number
}

const protect = (req:Request, res:Response, next:NextFunction) => {


    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                message: "You are not authorized to enter this route"
            });
        }
        const JWT= token?.split(' ')[1]
        const user = jwt.verify(token,process.env.JWT_SECERT as string)
        next(); 

    } catch (error) {
    console.log(error)
    return res.status(401).json({
        message: "You are not authorized to enter this route"
    });
    };

}


const authorize=(role:string)=>(req:Request, res:Response, next:NextFunction)=>{
const user=res.locals.user as IUser;
if(role !== role){
    return res.status(403).json({
        message:"you are not authorizad"
    })
}
next();
}

export default protect;












// import { Response } from "express";




// const protect =(req:Request, res:Response)=>{
// try{
//     const token=req.headers.authorization;


// }
// catch(error){
// console.log()
// return res.status(401).json({
// message:"you are not authrazied"
// })

// }


// }

// export default protect