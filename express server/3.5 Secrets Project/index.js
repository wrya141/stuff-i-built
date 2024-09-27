//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
let v = "";
function x(req, res, next) {
  if (req.body["password"] === "ILoveProgramming") {
    v = __dirname + "/public/secret.html";
  } else {
    v = __dirname + "/public/index.html";
  }
  next();
}
app.use(x);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (req, res) => {
  res.sendFile(v);
});

app.listen(3000, () => {});
