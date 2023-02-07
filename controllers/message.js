const MSG = require("../models/Message");

exports.createMessage = (req, res) => {
  const { firstName, lastName, tel,  email, messageTxt } = req.body;
  const message = new MSG ({ firstName, lastName, tel,  email, messageTxt });
  message
    .save()
    .then((message) => res.status(200).json(message))
    .catch((error) => handleError(res, error));
};

// exports.getMessage = (req, res, next) => {
//   MSG.find()
//     .sort({ createdAt: -1 })
//     // .sort({ clientInfo: req.clientInfo })

//     .then((messages) => res.status(200).json(messages))
//     .catch((error) => res.status(400).json({ error }));
// };
exports.getMessage = async (req, res) => {
  try{
    MSG.find()
    .sort({ createdAt: -1 })
    // .sort({ clientInfo: req.clientInfo })

    .then((messages) => res.status(200).json(messages))
  }
  catch{
    (error) => res.status(400).json({ error })
  };
};















// exports.getOneOrder = (req, res, next) => {
//   // Order.findById(req.params.id)

//   Order.findOne({ _id: req.params.id })

//     .then((order) => res.status(200).json(order))
//     .catch((error) => res.status(400).json({ error }));
// };
