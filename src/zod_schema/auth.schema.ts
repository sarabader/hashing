import {z} from 'zod';



export const loginSchema =z.object({
    body:z.object({
        username:z.string({required_error:'username is required !'}),
        password:z.string({required_error:'password is required'}),
    })
});


export const registerSchema =z.object({
    body:z.object({
        username:z.string({required_error:'username is required !'}).min(3),
        password:z.string({required_error:'password is required'}).min(6),
    })
});