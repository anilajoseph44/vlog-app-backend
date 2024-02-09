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

router.post("/signin",async(req,res)=>{

    let email=req.body.email

    let data=await usermodel.findOne({"email":email})
    if(!data)                                 //if the email id is not correct
    {
        return res.json(
            {
                status:"Incorrect email id"
            }
        )
    }
    console.log(data)
    let dbpassword=data.password   //original password
    let inputpassword=req.body.password   //entered password from request body
    console.log(dbpassword)
    console.log(inputpassword)

    const match=await bcrypt.compare(inputpassword,dbpassword) //comparing both password. first we should pass input password
    if(!match)
    {
        return res.json(
            {
                status:"Incorrect password"
            }
        )
    }
    res.json(
        {
            status:"success"
        }
    )
})


module.exports=router