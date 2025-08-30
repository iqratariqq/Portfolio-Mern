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
   origin: [
      "http://localhost:3000",
      "https://portfolio-quyyog7l8-iqras-projects-c95e893d.vercel.app"
   ],
   credentials: true
}));
app.use(express.json());

// routes
app.use("/api/v1/portfolio", require("./routes/routes"));

// static files
app.use(express.static(path.join(__dirname, "./client/build")));

// test route
app.get("/", (req, res) => {
   res.send("run correct");
});

// react fallback
app.get("*", (req, res) => {
   res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 3000;

// listening
app.listen(PORT, () => {
   console.log(`node server is running at http://localhost:${PORT}`);
});
