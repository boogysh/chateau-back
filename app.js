const express = require("express");
const app = express();
const mongoose = require('mongoose');
//const cors = require("cors");
//const MSG = require("./models/Message");

//requires routes
// const stuffRoutes = require("./routes/stuff");
const msgRoutes = require("./routes/message");
require("dotenv").config(); 
//require("./connect_mongodb/mongodb"); // after dotenv //Connecting to mongoDB

//Parsing
//app.use(express.json()); //const bodyParser = require("body-parser");
//app.use(cors());

mongoose.connect('mongodb+srv://boogysh:' + process.env.MONGO_DB_PASSWORD + '@cluster0.m2vegey.mongodb.net/?retryWrites=true&w=majority'
,
{ useNewUrlParser: true,
  useUnifiedTopology: true 
},)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// //Setting routes
//app.use("/api/commandes", stuffRoutes);
app.use("/api/messages", msgRoutes);

// app.get("/api/messages", async (req, res) => {
//   try {
//     const msg = await MSG.find();
//     if (!msg) return res.status(204).json({ message: "No messages found" });
//     res
//       .json(msg)
//       // .sort({ createdAt: -1 })
//       // .sort({ clientInfo: req.clientInfo })

//       // .then((messages) => res.status(200).json(messages));
//   } catch {
//     (error) => res.status(400).json({ error });
//   }
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
