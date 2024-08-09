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

const PORT = process.env.PORT;
// streamingApp_1.httpServer.listen(PORT, function () {
//     console.log(`${process.env.USERNAME}`);
//     console.log(`${process.env.PASSWORD}`);
//     console.log(`listening on  192 wala ${PORT}`);
// });

app.listen(PORT,function(){
    console.log(`listening on  192 wala ${PORT}`);
    console.log("server is ready")
})  
