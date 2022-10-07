const validateJSONFormat = (data) => {
  try {
    const json = JSON.parse(data);
    console.log(json);
    return { isValid: true };
  } catch (error) {
    return { isValid: false, error };
  }
};

const Validators = {
  validateJSONFormat,
};

module.exports = {
  Validators,
};
