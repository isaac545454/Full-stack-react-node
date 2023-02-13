import { Router } from "express";
import TaskController from "../Controller/TaskController";
import taskValition from "../middlewares/TaskValidation";
const router = Router();

router.post("/", taskValition, TaskController.create);
router.get("/:macaddress", TaskController.All);
router.put("/:id", taskValition, TaskController.update);
router.get("/:id", TaskController.findOne);
router.delete("/:id", TaskController.delete);
router.put("/:id/:done", TaskController.done);
router.get("/filter/late/:macaddress", TaskController.late);
router.get("/filter/today/:macaddress", TaskController.today);
router.get("/filter/week/:macaddress", TaskController.week);
router.get("/filter/month/:macaddress", TaskController.month);
router.get("/filter/years/:macaddress", TaskController.years);

export default router;
