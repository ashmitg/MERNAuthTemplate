const User = require("../../Models/UserModel");
const { createSecretToken } = require("../../util/SecretToken");
const bcrypt = require("bcryptjs");

const Signup = async (req, res, next) => {
  try {

    const { email, password, name, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const newUser = await User.create({
      email: email,
      name: name,
      password: password,
  });
    const token = createSecretToken(newUser._id);
    
    res.status(200).setHeader('Authorization', `Bearer${token}`).json({ token: token, useremail: newUser.email, name: newUser.name});
    next();
  } catch (error) {
    console.error(error);
  }
};
const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if(!email || !password ){
      return res.status(400).json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.status(400).json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.status(400).json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);

     res.status(200).setHeader('Authorization', `Bearer${token}`).json({ token: token, useremail: user.email, name: user.name});
     next()
  } catch (error) {
    console.error(error);
  }
}


module.exports = {Login, Signup};