
const HorseRide=require('../models/horseRide.models'); 
const ValidateHorseRide = require('../validation/HorseRide'); 
const CreateHorseRide= async (req,res)=> { 
    const {errors,isValid}=ValidateHorseRide(req.body);
 
    try { 
     if (!isValid){ 
        res.status(404).json(errors);

     } else { 
        const ride = await HorseRide.findOne({ title: req.body.title });
       
       if (!ride){ 
        const newHorseRide = new HorseRide({...req.body});
        await newHorseRide.save();
        res.status(200).json(newHorseRide);}
     }
        
    } catch (error) { 
        res.status(404).json({ message: error.message });

        
    }

}   

const GetHorseRides= async (req,res)=> { 
    try { 
        const horseRides = await HorseRide.find();
    res.status(200).json({
      success: true,
      data: horseRides,
    }); 
    
    } catch (error) { 
         res.status(404).json({ message: error.message }); 
        } 
    } 
    const getHorseRideByName = async (req, res) => {
        try {
          const horseRide = await HorseRide.findOne(req.params);
          if (!horseRide) {
            return res.status(404).json({
              success: false,
              message: 'Balade non trouvée',
            });
          }
          res.status(200).json({
            success: true,
            data: horseRide,
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      };
      
      const updateHorseRide = async (req, res) => {
        try {
          const horseRide = await HorseRide.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
          });
          if (!horseRide) {
            return res.status(404).json({
              success: false,
              message: 'Balade non trouvée',
            });
          }
          res.status(200).json({
            success: true,
            data: horseRide,
          });
        } catch (error) {
          res.status(400).json({
            success: false,
            message: error.message,
          });
        }
      };
      
      const deleteHorseRide = async (req, res) => {
        try {
          const horseRide = await HorseRide.findByIdAndDelete(req.params.id);
          if (!horseRide) {
            return res.status(404).json({
              success: false,
              message: 'Balade non trouvée',
            });
          }
          res.status(200).json({
            success: true,
            message: 'Balade supprimée avec succès',
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      };
      
      module.exports= { 
        CreateHorseRide,
        GetHorseRides,
        getHorseRideByName,
        updateHorseRide,
        deleteHorseRide,
      }