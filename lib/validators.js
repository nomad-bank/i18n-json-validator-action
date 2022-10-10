"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validators = void 0;
const validateJSONFormat = (data) => {
    try {
        const json = JSON.parse(data);
        console.log(json);
        return { isValid: true };
    }
    catch (error) {
        return { isValid: false, error };
    }
};
exports.Validators = {
    validateJSONFormat,
};
