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
  async update(req: Request, res: Response) {
    await taskModel
      .findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
      })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err: Error) => {
        return res.status(500).json(err);
      });
  }
}

export default new TaskController();
