import { Router } from "express";
import TaskController from "../Controller/TaskController";
import taskValition from "../middlewares/TaskValidation";
const router = Router();

router.post("/", taskValition, TaskController.create);
router.get("/all/:macaddress", TaskController.All);
router.put("/:id", taskValition, TaskController.update);
router.get("/:id", TaskController.findOne);
router.delete("/:id", TaskController.delete);
router.put("/:id/:done", TaskController.done);
router.get("/late/:macaddress", TaskController.late);
router.get("/today/:macaddress", TaskController.today);
router.get("/week/:macaddress", TaskController.week);
router.get("/month/:macaddress", TaskController.month);
router.get("/year/:macaddress", TaskController.years);

export default router;
