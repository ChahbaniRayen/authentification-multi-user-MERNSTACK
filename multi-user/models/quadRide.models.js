const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quadRideSchema = new Schema({
  title: {
    type: String,
    required: [true, "Le titre de la balade est obligatoire"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "La description est obligatoire"],
  },
  
  duration: {
    type: String,
    required: [true, "La durée est obligatoire"],
  },
  availableDates: {
    type: [Date], // Tableau de dates
    required: [true, "Les dates disponibles sont obligatoires"],
  },
  
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId, // Référence à un utilisateur
        ref: "User",
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      comment: {
        type: String,
        required: false,
      },
    },
  ],
}, {
  timestamps: true, 
});

module.exports = mongoose.model("QuadRide", quadRideSchema);
