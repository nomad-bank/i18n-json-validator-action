import { ValidatorResponse } from "./types";

const validateJSONFormat = (data: any): ValidatorResponse => {
  try {
    const json = JSON.parse(data);
    console.log(json);
    return { isValid: true };
  } catch (error) {
    return { isValid: false, error };
  }
};

export const Validators = {
  validateJSONFormat,
};
