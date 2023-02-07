const express = require("express");
const app = express();
//const cors = require("cors");

//requires routes
// const stuffRoutes = require("./routes/stuff");
const msgRoutes = require("./routes/message");
require("dotenv").config(); 
require("./connect_mongodb/mongodb"); // after dotenv //Connecting to mongoDB

//Parsing
//app.use(express.json()); //const bodyParser = require("body-parser");
//app.use(cors());

// //Setting routes
//app.use("/api/commandes", stuffRoutes);
app.use("/api/messages", msgRoutes);

// app.use("/", (req, res) => {
//   res.json({ message: "Hello from express" });
// });
app.listen(process.env.PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running on port ${process.env.PORT}`);
});





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
