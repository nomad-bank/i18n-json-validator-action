import * as core from "@actions/core";
import fs from "fs";
import {} from "@actions/github";
import { Validators } from "./validators";

try {
  const filePath = core.getInput("json_path");
  const file = fs.readFileSync(filePath, "utf8");

  try {
    const { isValid, error } = Validators.validateJSONFormat(file);
    core.setOutput("isValid", isValid);
    if (!isValid) {
      core.setOutput("errors", error);
    }
  } catch (error) {
    core.setOutput("isValid", false);
    core.setOutput("errors", error.message);
  }
} catch (error) {
  core.setFailed(error.message);
}
