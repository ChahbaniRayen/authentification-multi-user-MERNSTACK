const isEmpty = require('./isEmpty'); 
const validator = require('validator'); 

module.exports = function ValidateQuadRide(data) {  
    let errors = {};

    // Ensure all fields are strings or arrays
    data.title = !isEmpty(data.title) ? data.title : ""; 
    data.description = !isEmpty(data.description) ? data.description : ""; 
    data.duration = !isEmpty(data.duration) ? data.duration : ""; 
    data.availableDates = !isEmpty(data.availableDates) ? data.availableDates : []; 

    // Title validation
    if (validator.isEmpty(data.title)) {
        errors.title = "Le titre de la balade est obligatoire";
    }

    // Description validation
    if (validator.isEmpty(data.description)) {
        errors.description = "La description de la balade est obligatoire";
    }

    // Duration validation
    if (validator.isEmpty(data.duration)) {
        errors.duration = "La durée de la balade est obligatoire";
    }

    // AvailableDates validation
    if (data.availableDates.length === 0) {
        errors.availableDates = "Au moins une date disponible est obligatoire";
    } else {
        const invalidDates = data.availableDates.filter(date => !validator.isISO8601(date));
        if (invalidDates.length > 0) {
            errors.availableDates = "Toutes les dates doivent être au format ISO8601 (YYYY-MM-DD)";
        }
    }

    // Return errors and validity check
    return { 
        errors, 
        isValid: isEmpty(errors),
    };
};
