const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// dotenv config
dotenv.config();

// res object
const app = express();

// middleware
app.use(cors({
  origin: "https://portfolio-tawny-two-21.vercel.app/", //  frontend URL,in your case put your localhost 
  credentials: true
}));
app.use(express.json());

// routes
app.use("/api/v1/portfolio", require("./routes/routes"));



// test route
app.get("/", (req, res) => {
   res.send("run correct");
});



const PORT = process.env.PORT || 3000;

// listening
app.listen(PORT, () => {
   console.log(`node server is running at http://localhost:${PORT}`);
});
