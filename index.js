const express = require("express")
const mongoose = require('mongoose')
const user = require("./controller/userController.js")
const app = express();
const cors = require('cors')
app.use(cors())
mongoose.connect("mongodb+srv://zaidmohd9761:4np2AwlnTnV2OMJ9@cluster0.xqlopsr.mongodb.net/newData?retryWrites=true&w=majority&appName=Cluster0")
.then((data)=>{
    console.log("connected")
}).catch((err)=>{
   console.log(err)
});


app.use("/api",user);

app.listen(5523,function(){
    console.log("server is ready")
})  