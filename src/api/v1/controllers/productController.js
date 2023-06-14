const auth = {};
const tables = require("../../../models/");
const {validationResult} = require('express-validator');

auth.validations = (req, res, result)=>{
        const errors = result(req);
        if(!errors.isEmpty()){
          return res.status(404).json({status:false, msg: "Validation Error", data: errors });
        }
        return true;
}

auth.newProduct = async (req, res) => {
    try {
        auth.validations(req, res, validationResult);
      const groupID = await tables.group.findByPk(req.body.groupID);

      if(!groupID){
        return res.status(404).json({status:false, msg: "GroupID does not found,Please enter a valid groupID to create product", data: null });
      }
      const product = await tables.product.create(req.body)
      if(product){
        return res.status(200).json({msg: "product created successfully", newProduct: product})
      }
    } catch (error) {
        return res.status(404).json({msg: "Something went wrong", error: error.message})
    }
}

module.exports = auth;