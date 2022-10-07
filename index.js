const fs = require("fs");
const core = require("@actions/core");
const { Validators } = require("./validators");

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
