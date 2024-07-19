const Users = require('../models/userModel')
const userCtrl = {
register:(req,res)=>{
    res.json({msg: "test controller"})
}
}
module.exports = userCtrl