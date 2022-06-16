const mongoose = require("mongoose");

db ="mongodb://localhost:27017/greenlydb";

const dbconnect = mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(() => {
   console.log("Connnection Successful");
}).catch(() => {
    console.log("no connecton");
})

module.exports = dbconnect;