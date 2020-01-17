import * as fs from "fs";
import { root } from "./json";

fs.writeFile("db.json", JSON.stringify(root), err => {
  if (err) throw err;
  console.log("The file has been saved!");
});
