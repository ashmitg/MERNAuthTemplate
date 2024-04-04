const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userVerification = (req, res) => {

  const token = req.headers.authorization;
  if (!token) {
    return res.json({ status: false })
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     console.log(err, 'err')
        return res.json({ status: false })

    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.name, email: user.email})
      else return res.json({ status: false })
    }
  })
}

module.exports = userVerification;