const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data, customPass) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    // if (customPass !== 'GoodnessThatsALotOfPeople') {
    //     errors.customPass = "Custom pass was incorrect therefore rejecting registration.";
    // }
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.companyName = !isEmpty(data.companyName) ? data.companyName : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    // Name checks
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First name field is required";
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last name field is required";
    }
    // company checks
    if (Validator.isEmpty(data.companyName)) {
        errors.companyName = "Company field is required";
    }
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};