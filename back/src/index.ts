require("dotenv").config();
import Express from "express";
const app = Express();

app.use(Express.json());

require("./config/db");
app.listen(3000, () => {
  console.log("Server rodando porta 3000");
});
