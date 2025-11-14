const User = require("../model/user");
const generateToken = require('../utils/generateToken');
const ErrorResponse = require('../utils/errorResponse');

exports.CreateUserOrLogin = async (req, res , next) => {
  try {
    const { email, username } = req.body;

    let user = await User.findOne({ email });


    if (user) {
      return res.json({
        success: true,
        message: "user logged_in",
        token: generateToken(user._id),
        data: user,
      });
    }

    user = await User.create({ email, username });

    user.token = generateToken(user._id);

    await user.save();


    res.status(201).json({
      success: true,
      message: "user created",
      token: generateToken(user._id),
      data: user,
    });
  } catch (error) {
    next(error);
  }
};


exports.getUserProfile = async (req, res, next) => {
    try {
      const userId = req.user.id; 
  
      const user = await User.findById(userId).populate("friendsList", "username email");
  
      if (!user) {
        return next(new ErrorResponse("User not found", 404));
      }
  
      res.status(200).json({
        success: true,
        data: user,
      });
  
    } catch (err) {
      next(err);
    }
  };