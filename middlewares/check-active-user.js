const User = require("../models/user-model");

const checkActiveUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user || !user.isActive) {
      return res.status(403).json({ message: "Your account has been blocked. Please contact the administrator." });
    }
    next();
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = checkActiveUser;