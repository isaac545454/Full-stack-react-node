import { NextFunction } from "connect";
import { Router } from "express";
import TaskController from "../Controller/TaskController";
import macadrresValidation from "../middlewares/macadrresValidation";
import taskValition from "../middlewares/TaskValidation";
const router = Router();

router.post("/", taskValition, TaskController.create);
router.get("/", macadrresValidation, TaskController.All);
router.put("/:id", taskValition, TaskController.update);
router.get("/:id", taskValition, TaskController.update);

export default router;
