const mongoose=require('mongoose');  

const Schema = mongoose.Schema;

const JetSkyRideSchema= new Schema({ 

    tile: { 
        type:String, 
        required:[true,"title is required"]
    }, 
    discpription:{ 
        type:String,
        required:[true,"description is required"] 
    } , 
    durations:{ 
        type:String,
        required:[true,"duration is required"]
    }, 
    availableDates: {
        type: [Date], // Tableau de dates
        required: [true, 'Les dates disponibles sont obligatoires'],
      }, 
      reviews: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId, // Référence à un utilisateur
            ref: 'User',
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
    
    module.exports = mongoose.model('JetSkyRide', JetSkyRideSchema);
