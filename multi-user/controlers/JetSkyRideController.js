const JetSkyRide = require('../models/jetskyRide.models'); 

const ValidateJetSkyRide = require('../validation/JetSky'); 

const createJetSkyRide= async(req,res)=> { 
    const {errors,isValid}=ValidateJetSkyRide(req.body);
   try { 
     if (!isValid) {
        res.status(404).json(errors);
     } else {
        const ride = await JetSkyRide.findOne({ title: req.body.title });
       
       if (!ride){ 
         const newJetSkyRide = new JetSkyRide({...req.body});
         await newJetSkyRide.save();
         res.status(200).json(newJetSkyRide);}
     }
    
   } catch (error) { 
    res.status(404).json({ message: error.message });

    
   }
} 

const GetJetSkyRides= async (req,res)=> { 
    try { 
        const jetSkyRides = await JetSkyRide.findOne(req.params);
    res.status(200).json({
      success: true,
      data: jetSkyRides,
    }); 
    
    } catch (error) { 
         res.status(404).json({ message: error.message }); 
        }
}
  
const GetJetSkyRideByName = async (req, res) => {
    try {
      const jetSkyRide = await JetSkyRide.findOne({ title: req.params.tile });
      if (!jetSkyRide) {
        return res.status(404).json({ message: 'Jet Sky Ride not found' });
      }
      res.status(200).json(jetSkyRide);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}
const updateJetSkyRide = async (req,res)=> { 
    try { 
        const JetSkyRide = await JetSkyRide.findByIDAndUpdate(req.params.id , req.body, {
            new: true,
            runValidators: true,
          }); 
          if (!JetsKyRide){ 
            return res.status(404).json({
                success: false,
                message: 'Balade non trouvée',
              });
          } 
          res.status(200).json({
            success: true,
            data: JetSkyRide,
          });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
          });
    }
}  


const deleteJetSkyRide= async(req, res)=> {
try {
     
    const jetSkyRide = await JetSkyRide.findByIdAndDelete(req.params.id); 
    if (!jetSkyRide) {
        return res.status(404).json({ message: 'Balade non trouvée' });
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

}  
module.exports={ 
    createJetSkyRide,
    GetJetSkyRides,
    GetJetSkyRideByName,
    updateJetSkyRide,
    deleteJetSkyRide,
}