const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path=require("path")

//dotenv configuaration
dotenv.config();

//res object
const app = express();

//middleware
app.use(cors(
   { origin: "https://portfolio-quyyog7l8-iqras-projects-c95e893d.vercel.app",
      credentials: true
   }
));
app.use(express.json());

//static file
app.use(express.static(path.join(__dirname, './client/build')))

//routes
app.use('/api/v1/portfolio',require('./routes/routes'))
app.get((req,res)=>{
    res.send("run correct")
})



const PORT = process.env.PORT || 3000;

//listning
app.listen(PORT,()=>{
    console.log(`node server is running at http://localhost:${PORT}`)
})