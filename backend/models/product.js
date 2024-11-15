const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    id:String,
    product:String,
    quantity:String
})

const Pro=mongoose.model('Products',productSchema);
module.exports=Pro; 