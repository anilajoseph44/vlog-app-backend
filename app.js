const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const userroute=require("./controllers/vlogrouter")
const postrouter=require("./controllers/postrouter")

const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/vlog",userroute)
app.use("/api/post",postrouter)

mongoose.connect("mongodb+srv://anilasandrajose01:sandrajoseph99@cluster0.vpgykyq.mongodb.net/vlogDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})


app.listen(3001,()=>{
    console.log("server running")
})