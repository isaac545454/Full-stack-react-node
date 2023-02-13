import { NextFunction, Request, Response } from "express";
import TaskModel from "../Model/TaskModal";
import { isPast } from "date-fns";

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
  } else if (isPast(new Date(when))) {
    return res.status(400).json({ error: "Escolha uma Data no futuro" });
  }

  let exists;

  if (req.params.id) {
    exists = await TaskModel.findOne({
      when: { $eq: new Date(when) },
      macaddress: { $in: macaddress },
      _id: { $ne: req.params.id },
    });
  } else {
    exists = await TaskModel.findOne({
      when: { $eq: new Date(when) },
      macaddress: { $in: macaddress },
    });
  }
  if (exists) {
    return res
      .status(400)
      .json({ error: "já existe tarefa para esse horario" });
  }

  next();
};

export default taskValition;
