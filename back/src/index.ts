import Express from "express";
const app = Express();
require("dotenv").config();

require("./config/db");
app.listen(3000, () => {
  console.log("Server rodando porta 3000");
});
