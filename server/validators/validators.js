const isEmpty = require('is-empty');
const validator = require('validator');

module.exports.loginValidator = (data) =>{
    const errors = {};
    let emailError = validator.isEmpty(data.email)?'Email is required' : (!validator.isEmail(data.email)?'Please provide a valid email':'');
    let passwordError = validator.isEmpty(data.password)?'Password is required':'';

    if(emailError) errors.email = emailError;
    if(passwordError) errors.password = passwordError;

    return{
        errors,
        isValid: isEmpty(errors)
    }
};

module.exports.registerValidator = (data) =>{
    const errors = {};
    let emailError = validator.isEmpty(data.email)?'Email is required' : (!validator.isEmail(data.email)?'Please provide a valid email':'');
    let passwordError = validator.isEmpty(data.password)?'Password is required':'';
    let firstNameError = validator.isEmpty(data.firstName)?'Name is required':'';
    let lastNameError = validator.isEmpty(data.lastName)?'Last Name is required':'';

    if(emailError) errors.email = emailError;
    if(passwordError) errors.password = passwordError;
    if(firstNameError || lastNameError) errors.firstName = 'Full Nae is required';

    return{
        errors,
        isValid: isEmpty(errors)
    }
};