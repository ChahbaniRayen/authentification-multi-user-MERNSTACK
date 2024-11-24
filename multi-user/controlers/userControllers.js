const userModels = require("../models/user.models");
const UserModel= require("../models/user.models"); 
const ValidateRefister= require("../validation/Registre");
const ValidateLogin=require("../validation/Login"); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const Register = async (req,res)=> { 
    const {errors,isValid}=ValidateRefister(req.body);

    try{  
   if (!isValid) {
    res.status(404).json(errors);

   }else { 
    userModels.findOne({email:req.body.email})
    .then(async exist=>{ 
        if(exist){
            errors.email="Email already exists";
            res.status(400).json(errors);

        }else {  
            const hash = bcrypt.hashSync(req.body.password,10) ;
            req.body.password=hash;
    
            req.body.role="user";
            await UserModel.create(req.body); 
          res.status(200).json({messsage: 'Success'});

        }
    })

       }
   } catch(err){
    res.status(500).json({error: err.message});  

   }
} 

//  
const Login = async (req, res) => {
    const { errors, isValid } = ValidateLogin(req.body);
    try { 
        if (!isValid) { 
            return res.status(404).json(errors);         }

        const user = await UserModel.findOne({ email: req.body.email });
        
        if (!user) { 
            errors.email = "User not found"; 
            return res.status(404).json({ message: 'User not found' }); 
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        
        if (!isMatch) { 
            errors.password = "Password incorrect";
            return res.status(404).json(errors); 
        }else {
            var token = jwt.sign({ 
                id:user._id,
                email:user.email,
                name:user.name,
                role:user.role
             }, process.env.PRIVATE_KEY, { expiresIn:"10d" });
            res.status(200).json({
                message:"success", 
                token : "Bearer " +token
            }); 

        }

    } catch (err) { 
        res.status(500).json({ error: err.message });  
    }
};

const Test = async (req, res) => {
    res.send("welcome user");
} 

const Admin = async (req,res) => { 
    res.send("welcome Admin");
}


module.exports ={
    Register ,
    Login,
    Test, 
    Admin
}