const mongoose = require('mongoose');
const User = require('./model/User');
const listingsandreviews = require('./model/listingsandreviews');
const { db } = require('./model/User');
const dbURI = "mongodb+srv://Harshi_02:HarshiniRayasam@cluster0.p3fiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));

setTimeout(async () => {

    let data = await User.find({name:"sanjana"});
    User.save(data);
    console.log(data);
    
}, 5000);

