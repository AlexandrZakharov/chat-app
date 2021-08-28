const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      requred: true,
    },
    lastName: {
      type: String,
      requred: true,
    },
    email: {
      type: String,
      requred: true,
    },
    password: {
      type: String,
      requred: true,
    },
    avatar: {
      type: String,
      default: 'https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar.png'
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
