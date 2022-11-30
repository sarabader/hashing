import { Request, Response } from "express";
import { prisma } from "../config/db";
import { Prisma ,ClassRoom} from "@prisma/client";



export const getClassRoom = async (req: Request, res: Response) => {
    try {
      const classrooms = await prisma.classroom.findFirst();
  
      return res.status(200).json(classrooms);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
  export const addClassRoom = async (req: Request, res: Response) => {
    try {
      const newStudent = req.body as ClassRoom;
      await prisma.classroom.create({ data: newStudent });
  
      return res.status(201).json({
        message: "classroom added !",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
  export const getClassRoomById = async (req: Request, res: Response) => {
    try {
      const { params } = req.params;
  
      const classroom = await prisma.classroom.findFirst({
        where: { id: params },
      });
  
      if (!classroom) {
        return res.status(400).json({
          message: "classroom not found !",
        });
      }
  
      return res.status(200).json(classroom);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server Error !",
      });
    }
  };