const express = require("express");
const app = express();
const cors = require("cors");

//requires routes
const stuffRoutes = require("./routes/stuff");
const msgRoutes = require("./routes/message");

require("dotenv").config(); 
//Connecting to mongoDB  // after dotenv 
require("./connect_mongodb/mongodb"); 
//Parsing
//app.use(express.json()); //const bodyParser = require("body-parser");
app.use(cors());

// //Setting routes
app.use("/api/commandes", stuffRoutes);
app.use("/api/messages", msgRoutes);

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running on port ${process.env.PORT}`);
});

//-------------------------------------------------------------

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

//------------------------------------------------------

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
