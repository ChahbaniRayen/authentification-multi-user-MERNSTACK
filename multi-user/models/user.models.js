const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const UserMode = new Schema({ 
    name : {type :"String"},
    email : {type :"String",trim: true,unique:true},
    password : {type :"String" }, 
    role : {type :"String" }},{timestamps:true 
}
); 

module.exports= mongoose.model("users",UserMode); 