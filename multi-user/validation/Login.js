const isEmpty= require('./isEmpty'); 
const validator= require('validator'); 
module.exports= function ValidateLogin(data){  
    let errors={};

    data.password=!isEmpty(data.password) ? data.password : "" ;
    data.email=!isEmpty(data.email) ? data.email : "" ;
    
    if (validator.isEmpty(data.email)){
        errors.email="Email is required";
     }

    if (!validator.isEmail(data.email)){
     errors.email="format Email is required";
    }
        

    
    if (validator.isEmpty(data.password)){
        errors.password="Password is required";
    }
    
   return { 
    errors, 
    isValid:isEmpty(errors)
   }
};