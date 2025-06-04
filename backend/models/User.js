const { model, Schema, default: mongoose } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");
const { ObjectId } = mongoose.Schema;
const bcrypt = require("bcryptjs");
const patterns = require("../helpers/patterns");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trin: true,
      match: [patterns.email, "Please enter valid email address"],
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Password must be at list 6 characters"],
    },
    bio: {
      type: String,
      default: "",
    },
    profilePic: {
      type: String,
      default: "",
    },
    nativeLanguage: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    isOnboarded: {
      type: Boolean,
      default: false,
    },
    friends: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});
userSchema.post("save", handleMongooseError);
const User = model("User", userSchema);
module.exports = User;
