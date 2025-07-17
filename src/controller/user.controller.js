const userModel = require("../model/user.model");
const bodyValidator = require('../helper/bodyValidator')

exports.registration = async (req, res) => {
  const {username, email, phone} = req.body;
  try {
    bodyValidator.checkBody(req, res)
    userModel.create({
      username,
      email,
      phone,
    });

    return res.status(200).json({
      msg: "save done",
    });
  } catch (error) {
    console.error("Error writing data", error);
  }
};

exports.login = async (req, res) => {
  const {email, password} = req.body;
  try {
    bodyValidator.checkBody(req, res)
    const matchedUser = await userModel.findOne({email: req.body.email});
    console.log(matchedUser)
    if(!matchedUser) return res.status(404).json({
      msg: 'user not found.'
    })
    if(matchedUser.password === password) {
      matchedUser.lastLogin = new Date().toISOString();
      await matchedUser.save();
      return res.status(200).json({
        msg: 'Login successfull'
      })
    } else res.status(404).json({
      msg: 'Wrong password'
    })
  } catch (error) {
    console.error('Error writing data', error)
  }
}