const UserModel= require("../models/user.models"); 
const ROLES = { 
    ADMIN: 'admin',
    USER: 'user'

}

const inRole= (...roles)=> (req,res,next)=>{ 

    const role= roles.find(role=>req.user.role===role )
    if (!role){ 
        return res.status(401).json({message: 'No Accces'})
    } 
    next();
}
module.exports={
    inRole,
    ROLES
}