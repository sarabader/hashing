import express, { Router } from "express";
import { addStudent, getStudentById, getStudents } from "../controller/student.controller";
import validate from "../middlewer/validate";
import { registerSchema } from "../zod_schema/auth.schema";

const router=express.Router();

router.get('/',getStudents)
router.get('/:id',getStudentById)
router.post('/',addStudent)




export default router