const { ctrWrapper } = require("../../decorators");

const signin = async (req, res) => {
  res.json("Signin");
};
module.exports = ctrWrapper(signin);
