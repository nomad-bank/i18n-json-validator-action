import * as core from "@actions/core";

const ConfigKey = {
  SOURCEDIR: "GITHUB_WORKSPACE",
  JSON: "json_path",
};

type ConfigKeys = keyof typeof ConfigKey;

type Config = {
  [key in ConfigKeys]: string;
};

export async function getConfig(): Promise<Config> {
  return {
    SOURCEDIR: <string>process.env[ConfigKey.SOURCEDIR],
    JSON: core.getInput(ConfigKey.JSON),
  };
}
