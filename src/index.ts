import * as core from "@actions/core";
import * as github from "@actions/github";
import { Validators } from "./validators";
import { getConfig } from "./config";
import fs from "fs";

async function run() {
  try {
    const config = await getConfig();

    const file = await fs.promises.readFile(config.JSON, "utf8");

    try {
      const { isValid, error } = Validators.validateJSONFormat(file);
      core.setOutput("isValid", isValid);
      console.log(JSON.stringify(github.context.payload, undefined, 2));
      if (!isValid) {
        core.setOutput("errors", error);
      }
    } catch (error) {
      core.setOutput("isValid", false);
      core.setOutput("errors", error);
    }
  } catch (error) {
    console.log("error");
    core.setFailed(error as Error);
  }
}

run();
