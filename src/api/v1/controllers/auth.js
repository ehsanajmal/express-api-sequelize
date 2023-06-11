const auth = {};
const tables = require("../../../models/");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

auth.register = async (req, res) => {
  try {
    if (!(req.body.name || req.body.password || req.body.pincode || req.body.signinid)) {
      return res.status(404).json({ msg: "Please Input All Feilds" });
    }
    const salth = await bcrypt.genSalt(10);
    const password = req.body.password;
    let newPassword = await bcrypt.hash(password, salth);
    console.log(newPassword)
    req.body.password = newPassword;
    const user = await tables.user.create(req.body);
    if (user) {
      return res.status(200).json({ msg: "User Regostered", newUser: user });
    }
  
    return res.status(400).json({ msg: "Something Went Wrong", newUser: user });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Something Went Wrong", err: error.message });
  }
};

auth.registerWithPin = async (req, res) => {
  try {
    if (!(req.body.name || req.body.password || req.body.pincode || req.body.signinid)) {
      return res.status(404).json({ msg: "Please Input All Feilds" });
    }
    const salth = await bcrypt.genSalt(10);
    const pincode = req.body.pincode;
    let newPinCode = await bcrypt.hash(pincode, salth);
    req.body.pincode = newPinCode;
    const user = await tables.user.create(req.body);
    if (user) {
      return res.status(200).json({ msg: "User Registered Successfully", newUser: user });
    }
  
    return res.status(400).json({ msg: "Something Went Wrong", newUser: user });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Something Went Wrong", err: error.message });
  }
};


auth.login  = async (req,res)=>{
  try {
   
    if (!(req.body.email || req.body.password)) {
      return res.status(404).json({ msg: "Please Input All Feilds" });
    }
    const user = await tables.user.findOne({where:{email:req.body.email}});
    
    if(!user){
      return res.status(404).json({status:false, msg: "Invalid Credentials", data: null });
    }
    const password = await bcrypt.compare(req.body.password, user.dataValues.password);
    if(!password){
      return res.status(404).json({status:false, msg: "Invalid Credentials", data: null });
    }
    const data = {
      id:user.dataValues.id,
      email:user.dataValues.email,
      name:user.dataValues.name,
     }
     const token = await jwt.sign(data, process.env.SECRETE_KEY, {
      expiresIn:'2h'
     });
    return res.status(200).json({status:true, msg: "Login Successfully", data: token }) 
     
    
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Something Went Wrong", err: error.message });
  }
}

auth.loginWithPin  = async (req,res)=>{
  try {
   
    if (!(req.body.pincode || req.body.signinid)) {
      return res.status(404).json({ msg: "Please Input All Feilds" });
    }
    const user = await tables.user.findOne({where:{signinid:req.body.signinid}});
    
    if(!user){
      return res.status(404).json({status:false, msg: "Invalid Credentials", data: null });
    }
    const pincode = await bcrypt.compare(req.body.pincode, user.dataValues.pincode);

    if(!pincode){
      return res.status(404).json({status:false, msg: "Invalid Credentials", data: null });
    }
    const data = {
      id:user.dataValues.id,
      email:user.dataValues.email,
      name:user.dataValues.name,
     }
     console.log(user.dataValues.pincode);
     console.log(user.dataValues.signinid);
     const token = await jwt.sign(data, process.env.SECRETE_KEY, {
      expiresIn:'2h'
     });
    return res.status(200).json({status:true, msg: "Login Successfully", data: token }) 
    
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Something Went Wrong", err: error.message });
  }
}


module.exports = auth;
