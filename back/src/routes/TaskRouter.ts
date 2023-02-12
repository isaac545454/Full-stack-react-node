import { Router, Request, Response } from "express";
import TaskController from "../Controller/TaskController";
const router = Router();

router.post("/", (req: Request, res: Response) =>
  TaskController.create(req, res)
);

export default router;
