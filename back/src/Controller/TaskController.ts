import taskModel from "../Model/TaskModal";
import { Request, Response } from "express";

class TaskController {
  async create(req: Request, res: Response) {
    const task = new taskModel(req.body);
    await task
      .save()
      .then((response) => {
        return res.status(201).json(response);
      })
      .catch((error: Error) => {
        return res.status(500).json(error);
      });
  }
}

export default new TaskController();
