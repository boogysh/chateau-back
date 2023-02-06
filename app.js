const express = require("express");
const app = express();
//const Order = require("./models/Order");

require("dotenv").config();


app.use("/", (req,res) => {
  res.json({message: "Hello from express"})
});

// const PORT = 4000;
app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running on port ${process.env.PORT}`);
});
  


