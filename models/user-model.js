/*
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilepicture: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
*/

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { 
      type: String, 
      required: true, 
      unique: true 
    }, // Added username field for uniqueness

    name: { 
      type: String, 
      required: true 
    },

    email: { 
      type: String, 
      required: true, 
      unique: true 
    },

    password: { 
      type: String, 
      required: true 
    },

    profilepicture: { 
      type: String, 
      default: "" 
    },

    isAdmin: { 
      type: Boolean, 
      default: false 
    },

    isActive: { 
      type: Boolean, 
      default: true 
    }, 

  },
  { timestamps: true } // Keeps track of createdAt and updatedAt fields
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
