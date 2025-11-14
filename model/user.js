const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    friendList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    token:String
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
