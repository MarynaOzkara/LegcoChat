const { ctrWrapper } = require("../../decorators");

const signup = async (req, res) => {
  res.json("Signup");
};
module.exports = ctrWrapper(signup);
