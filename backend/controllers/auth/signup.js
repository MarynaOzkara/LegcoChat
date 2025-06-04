const { ctrWrapper } = require("../../decorators");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields is required" });
  }
  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(409).json({ message: "Email is alredy in used" });
  }
  const ind = Math.floor(Math.random() * 100) + 1;
  const randomAvatar = `https://avatar.iran.liara.run/public/${ind}.png`;
  const newUser = await User.create({
    name,
    email,
    password,
    profilePic: randomAvatar,
  });
  const payload = {
    userId: newUser._id,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  res.status(201).json({ user: newUser });
};
module.exports = ctrWrapper(signup);
