var express = require('express'); 
const { Register,Login,Test,Admin } = require('../controlers/userControllers');
const passport = require('passport');
var router = express.Router(); 
const{ inRole, ROLES} = require('../security/Rolemiddleware'); 
const {AddProfile, FindALLProfile,FindOneProfile, DeleteProfile,UpdateProfile  } = require('../controlers/profileController');
router.post('/register',Register ); 
router.post('/login',Login ); 



//test 
// addprofile
router.post('/profiles',passport.authenticate('jwt', { session: false }),AddProfile ); 
//getall profile
router.get('/profiles',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),FindALLProfile ); 
//getoneprofile
router.get('/profile',passport.authenticate('jwt', { session: false }),FindOneProfile ); 
//supprimmer profile 
router.delete('/profiles/:id',passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),DeleteProfile ); 
 


module.exports = router;
