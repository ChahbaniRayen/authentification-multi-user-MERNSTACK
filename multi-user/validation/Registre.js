const isEmpty= require('./isEmpty'); 
const validator= require('validator'); 
module.exports= function ValidateRefister(data){  
    let errors={};

    data.name=!isEmpty(data.name) ? data.name : "" ;
    data.password=!isEmpty(data.password) ? data.password : "" ;
    data.email=!isEmpty(data.email) ? data.email : "" ;
    data.confirm=!isEmpty(data.confirm) ? data.confirm : "" ; 
    
    if (validator.isEmpty(data.name)){
        errors.name="Name is required";
    } 
    if (validator.isEmpty(data.email)){
        errors.email="Email is required";
     }

    if (!validator.isEmail(data.email)){
     errors.email="format Email is required";
    }
        if (!validator.equals(data.password,data.confirm)) {
            errors.confirm="Password and Confirm Password must match";
    }

    
    if (validator.isEmpty(data.password)){
        errors.password="Password is required";
    }
    if (validator.isEmpty(data.confirm)){
        errors.confirm="Confirm is required";
    }
   return { 
    errors, 
    isValid:isEmpty(errors)
   }
};