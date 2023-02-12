import { NextFunction } from "connect";
import { Router, Request, Response } from "express";
import TaskController from "../Controller/TaskController";
import taskValition from "../middlewares/TaskValidation";
const router = Router();

router.post("/", taskValition, TaskController.create);

export default router;
