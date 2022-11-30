import express, { Router } from 'express';
import { loginHandler, registerHandler } from '../controller/auth.controller';
import protect from '../middlewer/protect';
import validate from '../middlewer/validate';
import { loginSchema, registerSchema } from '../zod_schema/auth.schema';

const router=express.Router();

router.post('/login',protect, validate(loginSchema),loginHandler)
router.post('/register',validate(registerSchema) ,registerHandler)





export default router


