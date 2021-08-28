const router = require("express").Router();
const User = require("../models/user");

//get a user
router.get("/user", async (req, res) => {
  const userId = req.query.userId;
  try {
    const user = await User.findById(userId)
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;