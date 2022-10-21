const {
  signupService,
  findUserByEmailService,
} = require("../services/auth.service");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res) => {
  try {
    const user = await signupService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Successfully created account",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Couldn't create account",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  //   console.log(req.body);
  try {
    // console.log("555");
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "Fail",
        error: "Please provide all your credentials",
      });
    }

    const user = await findUserByEmailService(email);

    if (!user) {
      return res.status(401).json({
        status: "Fail",
        message: "No user found please create a account",
      });
    }

    // compare server and user provide password
    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        status: "fail",
        message: "Password is not valid",
      });
    }

    const token = generateToken(user);
    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "Success",
      message: "Successfully Login",
      data: {
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: "Couldn't Login",
      error: error.message,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await findUserByEmailService(req.user?.email);

    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't Login",
      error: error.message,
    });
  }
};
