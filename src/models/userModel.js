import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
      min: 4,
      max: 50,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      max: 50,
    },

    password: {
      type: String,
      required: [true, "Please provide a password"],
      min: 6,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  }
  //   { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
