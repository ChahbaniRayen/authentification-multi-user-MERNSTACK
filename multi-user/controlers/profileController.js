const ProfileModel= require('../models/profile.models');
const ValidateProfile=require('../validation/Profile')


const AddProfile = async (req, res) => {
    const{errors,isValid}=ValidateProfile(req.body);
    try { 
        
        if (!isValid){ 
             res.status(404).json({errors:errors});

        }else { 
            const profile = await ProfileModel.findOne({ user: req.user.id });
        
        if (!profile) {
            await ProfileModel.create({ ...req.body, user: req.user.id });
            return res.status(200).json({ message: "Profile created successfully" });
        }

        const updatedProfile = await ProfileModel.findOneAndUpdate(
            { user: req.user.id },
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedProfile);
        } 
    }catch (error) {
        res.status(404).json({ message: error.message });
    }
        };

const FindALLProfile = async (req,res)=> {
    try{ 
        const data = await ProfileModel.find().populate('user',["name","email","role"])    ; 
        res.status(200).json(data);

    }catch {  
        res.status(404).json({ message: error.message });


    }
}

const FindOneProfile = async (req,res)=> { 
    try{ 
        const data = await ProfileModel.findOne({user:req.user.id}) ; 
        res.status(200).json(data);

    }catch { 
        res.status(404).json({ message: error.message });

    }
}

const DeleteProfile = async (req,res)=> {
    try{ 
        const data = await ProfileModel.findOneAndDelete({_id:req.params.id}) ; 
        res.status(200).json({message:"deleted"});

    }catch { 
        res.status(404).json({ message: error.message });

    }}


module.exports = { 
    AddProfile,
    FindALLProfile,
    FindOneProfile,
    DeleteProfile,
};