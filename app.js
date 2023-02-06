const express = require("express");
const app = express();
//const Order = require("./models/Order");

//requires routes
const stuffRoutes = require("./routes/stuff");
const msgRoutes = require("./routes/message");

require("dotenv").config(); //or .config({ path:"../folder/.env"}), if .env is not a root file

// //Connecting to mongoDB
require("./connect_mongodb/mongodb"); // after dotenv

//Parsing
app.use(express.json()); //const bodyParser = require("body-parser");

//Setting CORS headers, to avoid CORS errors

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

// //Setting routes

// app.use("/api/commandes", stuffRoutes);
// app.use("/api/messages", msgRoutes);

app.use("/", (req,res) => {
  res.json({message: "Hello from express"})
});

// const PORT = 4000;
app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running on port ${process.env.PORT}`);
});
// const express = require("express");
// const app = express();
// //const Order = require("./models/Order");

// require("dotenv").config();


// app.use("/", (req,res) => {
//   res.json({message: "Hello from express"})
// });

// // const PORT = 4000;
// app.listen(process.env.PORT, (error) => {
//   error ? console.log(error) : console.log(`Server is running on port ${process.env.PORT}`);
// });
  


