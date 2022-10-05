import * as core from "@actions/core";
import fs from "fs";
import {} from "@actions/github";

try {
  const filePath = core.getInput("json_path");
  const file = fs.readFileSync(filePath, "utf8");

  try {
    const json = JSON.parse(file);
    console.log(json);
    core.setOutput("isValid", true);
  } catch (error) {
    core.setOutput("isValid", false);
    core.setOutput("errors", error.message);
  }
} catch (error) {
  core.setFailed(error.message);
}
