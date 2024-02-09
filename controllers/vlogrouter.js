const express=require("express")
const usermodel=require("../models/usermodel")

const router=express.Router()

router.post("/signup",async(req,res)=>{

    let data=req.body
    let user=new usermodel(data)
    let response=await user.save()
    res.json(
        {
            status:"success"
        }
    )

})


module.exports=router