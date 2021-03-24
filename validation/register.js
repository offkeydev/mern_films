const validator = require("validator")
const isEmpty = require("is-empty")

module.exports = function validateRegisterInput(data){
    let errors = {}

    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //Email checks
    if(validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }else if(!validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    //Password checks
    if(validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }
    //Password length
    if(!validator.isLength(data.password,{min:6, max:30})){
        errors.password = "Password must be at least 6 characters";
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }

}