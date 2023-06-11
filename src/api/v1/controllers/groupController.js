const auth = {};
const tables = require("../../../models/");

auth.createGroup = async (req, res) => {
    try {
      if(!(req.body.name || req.body.description)){
        return res.status(400).json({msg: "Please input all fields"})
      }
      const group = await tables.group.create(req.body)
      if(group){
        return res.status(200).json({msg: "Group created successfully", newGroup: group})
      }
    } catch (error) {
        return res.status(404).json({msg: "Something went wrong", error: error.message})
    }
}

module.exports = auth;