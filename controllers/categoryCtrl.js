const Category = require('../models/categoryModel')

const categoryCtrl = {

getCategories : async (req,res) =>{
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},
createCategory:async (req,res)=>{
    try {
        const {name} = req.body;
        const category = await Category.findOne({name})
        if(category) return res.status(400).json({msg:"this category already exist"})

        const newCategory = new Category({name})

        await newCategory.save();
        return res.json({msg: "created category sucessfully"})
       
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

}

module.exports = categoryCtrl