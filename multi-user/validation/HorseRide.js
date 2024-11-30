const isEmpty = require('./isEmpty'); 
const validator = require('validator'); 

module.exports = function ValidateHorseRide(data) {  
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : ""; 
    data.description = !isEmpty(data.description) ? data.description : ""; 
    data.type = !isEmpty(data.type) ? data.type : ""; 
    data.duration = !isEmpty(data.duration) ? data.duration : ""; 
    data.availableDates = !isEmpty(data.availableDates) ? data.availableDates : []; 

    if (validator.isEmpty(data.title)) {
        errors.title = "Le titre de la balade est obligatoire";
    }

    if (validator.isEmpty(data.description)) {
        errors.description = "La description de la balade est obligatoire";
    }

    const validTypes = ['Coucher de soleil', 'Lever de soleil', 'Plage'];
    if (validator.isEmpty(data.type)) {
        errors.type = "Le type de balade est obligatoire";
    } else if (!validTypes.includes(data.type)) {
        errors.type = `Le type doit être l'un des suivants : ${validTypes.join(', ')}`;
    }

    if (validator.isEmpty(data.duration)) {
        errors.duration = "La durée de la balade est obligatoire";
    }

    if (data.availableDates.length === 0) {
        errors.availableDates = "Au moins une date disponible est obligatoire";
    } else {
        const invalidDates = data.availableDates.filter(date => !validator.isISO8601(date));
        if (invalidDates.length > 0) {
            errors.availableDates = "Toutes les dates doivent être au format ISO8601 (YYYY-MM-DD)";
        }
    }

    return { 
        errors, 
        isValid: isEmpty(errors),
    };
};
