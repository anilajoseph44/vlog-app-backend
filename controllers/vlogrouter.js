const express=require("express")
const usermodel=require("../models/usermodel")

const router=express.Router()
const bcrypt=require("bcryptjs")

hashpasswordgenerator=async(pwd)=>{
    const salt=await bcrypt.genSalt(10)    //it s salt value.10 is the standard value for encryption
    return bcrypt.hash(pwd,salt)       //for encrypting pswd,passing out passwoird and salt value

}

router.post("/signup",async(req,res)=>{

    let {data}={"data":req.body}      //getting request body data individually
    let password=data.password
    hashpasswordgenerator(password).then(
        (hashedpassword)=>{
            console.log(hashedpassword)
            data.password=hashedpassword
            console.log(data)
            let user=new usermodel(data)
            let response=user.save()
            res.json(
                {
                    status:"success"
                }
            )

        }
    )

})


module.exports=router