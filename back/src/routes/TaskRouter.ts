import { Router } from "express";
import TaskController from "../Controller/TaskController";
import macadrresValidation from "../middlewares/macadrresValidation";
import taskValition from "../middlewares/TaskValidation";
const router = Router();

router.post("/", taskValition, TaskController.create);
router.get("/", macadrresValidation, TaskController.All);
router.put("/:id", taskValition, TaskController.update);
router.get("/:id", TaskController.findOne);
router.delete("/:id", TaskController.delete);
router.put("/:id/:done", TaskController.done);
router.get("/filter/late", macadrresValidation, TaskController.late);
router.get("/filter/today", macadrresValidation, TaskController.today);
router.get("/filter/week", macadrresValidation, TaskController.week);
router.get("/filter/month", macadrresValidation, TaskController.month);
router.get("/filter/years", macadrresValidation, TaskController.years);

export default router;
