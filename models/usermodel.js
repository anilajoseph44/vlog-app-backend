const mongoose=require("mongoose")

const userschema=new mongoose.Schema(
    {
        name:String,
        age:String,
        mobno:String,
        address:String,
        pincode:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("user",userschema)