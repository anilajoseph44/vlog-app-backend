const mongoose=require("mongoose")

const postschema=new mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"user"    //it is refering usermodel.
        },
        post:{
            type:String,
            required:true
        },
        postedDate:{
            type:Date,
            default:Date.now        //automatically insert current date
        }
    
    }
)

module.exports=mongoose.model("vlogposts",postschema)