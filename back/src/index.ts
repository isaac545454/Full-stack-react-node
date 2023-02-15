require("dotenv").config();
import Express from "express";
import TaskRouter from "./routes/TaskRouter";
const app = Express();
import cors from "cors";

app.use(Express.json());
app.use(cors({}));

require("./config/db");

app.use("/task", TaskRouter);

app.listen(3000, () => {
  console.log("Server rodando porta 3000");
});
