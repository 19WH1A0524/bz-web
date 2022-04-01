const mongoose = require('mongoose');
const User = require('./model/User');
const listingsAndReviews = require('./model/listingsandreviews')
const dbURI = "mongodb+srv://Harshi_02:HarshiniRayasam@cluster0.p3fiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));

setTimeout(async () => {

    let data = await User.find(
    );
   
    console.log(data);
    
}, 5000);



// https://github.com/kaushikkumarbz/Test
// const express = require('express')
// const app = express()
// const cors = require("cors");
// app.use(express.json())


// const URI = "mongodb+srv://Harshi_02:HarshiniRayasam@cluster0.p3fiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const mongoose = require('mongoose')
// try{
// mongoose.connect(
//     URI, {useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log(" Mongoose is connected"));
//     }catch(e){
//         console.log("ERROR!");
//     }
// app.get("/", (req, res)=>{
//     res.send({success: true, msg: "Hello World"});
// })

// app.listen(1337, ()=>{
//     console.log("Server started on 1337")
// })


// // // const port = process.env.Port || 1337;

// // // app.use(express.json())

// // const express = require('express')
// // const app = express()
// // const cors = require("cors");

// app.use(cors())

