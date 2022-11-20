const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {   //will allow us to know which user is associated with which goal
      user:{
          type:mongoose.Schema.Types.ObjectId,
          required : true,
          ref : 'User'  //to specific user
      },

    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema) //goal is name of schema