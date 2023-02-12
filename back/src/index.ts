require("dotenv").config();
import Express from "express";
import TaskRouter from "./routes/TaskRouter";
const app = Express();

app.use(Express.json());

require("./config/db");

app.use("/task", TaskRouter);

app.listen(3000, () => {
  console.log("Server rodando porta 3000");
});
