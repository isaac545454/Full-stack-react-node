import { NextFunction } from "connect";
import { Router } from "express";
import TaskController from "../Controller/TaskController";
import taskValition from "../middlewares/TaskValidation";
const router = Router();

router.post("/", taskValition, TaskController.create);
router.put("/:id", taskValition, TaskController.update);

export default router;
