import express, { Router } from "express";
import { addTeachers, getTeacher, getTeachersById } from "../controller/teacher.controller";
import validate from "../middlewer/validate";
import { registerSchema } from "../zod_schema/auth.schema";

const router=express.Router();

router.get('/',getTeacher)
router.get('/:id',getTeachersById)
router.post('/',addTeachers)




export default router