import express, { Router } from "express";
import { addClassRoom, getClassRoom, getClassRoomById } from "../controller/school.controller";
import validate from "../middlewer/validate";

const router=express.Router();

router.get('/',getClassRoom)
router.get('/:id',getClassRoomById)
router.post('/',addClassRoom)




export default router