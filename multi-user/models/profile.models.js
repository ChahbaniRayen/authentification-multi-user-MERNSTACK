const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserProfile = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    tel: { type: "String" },
    city: { type: "String" },
    country: { type: "String" },
    postalcode: { type: "String" },
    bio: { type: "String" },
  },

  { timestamps: true }
);

module.exports = mongoose.model("profiles", UserProfile);

