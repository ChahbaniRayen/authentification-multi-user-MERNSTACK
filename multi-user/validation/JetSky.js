const isEmpty = require('./isEmpty');
const validator = require('validator');

module.exports = function ValidateJetSkyRide(data) {
    let errors = {};

    // Ensure all fields are strings or arrays where applicable
    data.tile = !isEmpty(data.tile) ? data.tile : "";
    data.discpription = !isEmpty(data.discpription) ? data.discpription : "";
    data.durations = !isEmpty(data.durations) ? data.durations : "";
    data.availableDates = !isEmpty(data.availableDates) ? data.availableDates : [];

    // Validate title
    if (validator.isEmpty(data.tile)) {
        errors.tile = "Le titre de la balade est obligatoire";
    }

    // Validate description
    if (validator.isEmpty(data.discpription)) {
        errors.discpription = "La description de la balade est obligatoire";
    }

    // Validate duration
    if (validator.isEmpty(data.durations)) {
        errors.durations = "La durée de la balade est obligatoire";
    }

    // Validate available dates
    if (data.availableDates.length === 0) {
        errors.availableDates = "Au moins une date disponible est obligatoire";
    } else {
        const invalidDates = data.availableDates.filter(date => !validator.isISO8601(date));
        if (invalidDates.length > 0) {
            errors.availableDates = "Toutes les dates doivent être au format ISO8601 (YYYY-MM-DD)";
        }
    }

    // No validation needed for reviews here; it's handled during CRUD operations.

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
