import taskModel from "../Model/TaskModal";
import { Request, response, Response } from "express";
import { doesNotMatch } from "assert";

const current = new Date();
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

  async delete(req: Request, res: Response) {
    await taskModel
      .deleteOne({ _id: req.params.id })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async All(req: Request, res: Response) {
    await taskModel
      .find({ macaddress: { $in: req.body.macaddress } })
      .sort("when")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async findOne(req: Request, res: Response) {
    await taskModel
      .findById(req.params.id)
      .then((response) => {
        if (response) {
          return res.status(200).json(response);
        } else {
          return res.status(404).json({ error: "Tarefa não Encontrada" });
        }
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async done(req: Request, res: Response) {
    await taskModel
      .findByIdAndUpdate(
        { _id: req.params.id },
        { done: req.params.done },
        { new: true }
      )
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }

  async late(req: Request, res: Response) {
    await taskModel
      .find({
        when: { $lt: current },
        macaddress: { $in: req.body.macaddress },
      })
      .sort("when")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }
}

export default new TaskController();
