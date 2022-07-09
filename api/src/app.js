
const express = require("express"); 
const router = require("./routes/getInformation")
const morgan = require("morgan"); 

const app = express();
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
app.use(morgan("dev")); 

app.set("PORT", process.env.PORT || 3001); 
app.use("/wheater", router)

app.get("/", (req,res)=> {
    res.send("I'm good")
})


module.exports = app; 