const isEmpty= require('./isEmpty'); 
const validator= require('validator');  
 

module.exports= function ValidateProfile(data){  
    let errors={};

    data.tel=!isEmpty(data.tel) ? data.tel : "" ;
    data.country=!isEmpty(data.country) ? data.country : "" ;
    data.city=!isEmpty(data.city) ? data.city : "" ;   
    data.postalcode=!isEmpty(data.postalcode) ? data.postalcode : "" ;  


    data.bio=!isEmpty(data.bio) ? data.bio : "" ; 
    
    if (validator.isEmpty(data.tel)){
        errors.tel="tel is required";
    } 
    if (validator.isEmpty(data.country)){
        errors.country="country is required";
     }

    
        if (validator.isEmpty(data.city)){
        errors.city="city is required";
    }
    if (validator.isEmpty(data.postalcode)){
        errors.postalcode="postalcode is required";
    } 
    if (validator.isEmpty(data.bio)){
        errors.bio="bio is required";
    }
   return { 
    errors, 
    isValid:isEmpty(errors)
   }
};