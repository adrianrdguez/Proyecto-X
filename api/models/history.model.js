const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  eBook_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "eBooks"

  },
  history_Date: {
    type: Date,
  },
  history_Type: {
    type: String,
    enum: ["Free Sample", "Purchase"]
  }

})

const historyModel = mongoose.model('history', historySchema)
module.exports = historyModel
