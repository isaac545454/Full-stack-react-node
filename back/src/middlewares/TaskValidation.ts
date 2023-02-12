import { NextFunction, Request, Response } from "express";
import TaskModel from "../Model/TaskModal";

interface IRequest {
  macaddress: string;
  type: number;
  title: string;
  description: string;
  when: Date;
}

const taskValition = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { macaddress, type, title, description, when } = req.body as IRequest;

  if (!macaddress || !type || !title || !description || !when) {
    return res.status(400).json({ error: "preencha todos os campos" });
  }

  next();
};

export default taskValition;
