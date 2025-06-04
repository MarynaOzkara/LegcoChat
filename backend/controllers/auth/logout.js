const { ctrWrapper } = require("../../decorators");

const logout = async (req, res) => {
  res.json("Logout");
};
module.exports = ctrWrapper(logout);
