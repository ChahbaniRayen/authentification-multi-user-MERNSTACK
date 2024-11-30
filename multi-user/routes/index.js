var express = require('express'); 
const { Register,Login,Test,Admin } = require('../controlers/userControllers');
const passport = require('passport');
var router = express.Router(); 
const{ inRole, ROLES} = require('../security/Rolemiddleware'); 
const {AddProfile, FindALLProfile,FindOneProfile, DeleteProfile,UpdateProfile  } = require('../controlers/profileController');
const  { 
    CreateHorseRide,
    GetHorseRides,
    getHorseRideByName,
    updateHorseRide,
    deleteHorseRide,
  }
 = require('../controlers/HorseRideController')


 const  { 
  CreateQuadRide,
  GetQuadRides,
  getQuadRideByName,
  updateQuadRide,
  deleteQuadRide
} = require('../controlers/QuadRideController');
router.post('/register',Register ); 
router.post('/login',Login );  

const { 
  createJetSkyRide,
  GetJetSkyRides,
  GetJetSkyRideByName,
  updateJetSkyRide,
  deleteJetSkyRide} = require('../controlers/JetSkyRideController');


// addprofile
router.post('/profiles',passport.authenticate('jwt', { session: false }),AddProfile ); 
//getall profile
router.get('/profiles',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),FindALLProfile ); 
//getoneprofile
router.get('/profile',passport.authenticate('jwt', { session: false }),FindOneProfile ); 
//supprimmer profile 
router.delete('/profiles/:id',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),DeleteProfile ); 
 //horseride
 router.post('/horserides',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),CreateHorseRide) ; 
 router.get('/horserides',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),GetHorseRides) ;
 router.get('/horserides/:title',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),getHorseRideByName); 
 router.put('/horserides/:id',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),updateHorseRide); 
 router.delete('/horserides/:id',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),deleteHorseRide);  
  

//quadride 
 router.post('/quadrides',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),CreateQuadRide) ; 
 router.get('/quadrides',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),GetQuadRides) ;
 router.get('/quadrides/:title',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),getQuadRideByName); 
 router.put('/quadrides/:id',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),updateQuadRide); 
 router.delete('/quadrides/:id',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),deleteQuadRide);  

//jetskyride
 router.post('/jetskyrides',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),createJetSkyRide) ; 
 router.get('/jetskyrides',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),GetJetSkyRides) ;
 router.get('/jetskyrides/:tile',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),GetJetSkyRideByName); 
 router.put('/jetskyrides/:id',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),updateJetSkyRide); 
 router.delete('/jetskyrides/:id',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),deleteJetSkyRide);
module.exports = router;
