import { Request, Response } from "express";
import { prisma } from "../config/db";
import { Prisma ,Student} from "@prisma/client";



export const getStudents = async (req: Request, res: Response) => {
    try {
      const students = await prisma.student.findFirst();
  
      return res.status(200).json(students);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
  export const addStudent = async (req: Request, res: Response) => {
    try {
      const newStudent = req.body as Student;
      await prisma.student.create({ data: newStudent });
  
      return res.status(201).json({
        message: "Student added !",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
  export const getStudentById = async (req: Request, res: Response) => {
    try {
      const { params } = req.params;
  
      const student = await prisma.student.findFirst({
        where: { id: params },
      });
  
      if (!student) {
        return res.status(400).json({
          message: "user not found !",
        });
      }
  
      return res.status(200).json(student);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server Error !",
      });
    }
  };