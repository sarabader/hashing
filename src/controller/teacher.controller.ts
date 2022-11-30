import { Request, Response } from "express";
import { prisma } from "../config/db";
import { Prisma ,Teacher} from "@prisma/client";



export const getTeacher = async (req: Request, res: Response) => {
    try {
      const Teachers = await prisma.teacher.findFirst();
  
      return res.status(200).json(Teachers);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
  export const addTeachers = async (req: Request, res: Response) => {
    try {
      const newStudent = req.body as Teacher;
      await prisma.teacher.create({ data: newStudent });
  
      return res.status(201).json({
        message: "Teacher added !",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
  export const getTeachersById = async (req: Request, res: Response) => {
    try {
      const { params } = req.params;
  
      const teachers = await prisma.teachers.findFirst({
        where: { id: params },
      });
  
      if (!teachers) {
        return res.status(400).json({
          message: "Teacher not found !",
        });
      }
  
      return res.status(200).json(teachers);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server Error !",
      });
    }
  };