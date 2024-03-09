import registerLoginService from "../services/registerLoginService";

const registerUser = async (req, res) => {
  try {
    const { lastName, firstName, email, password, phone, sex } = req.body.data;
    if (!lastName || !firstName || !email || !password || !phone || !sex) {
      return res.status(200).json({
        EM: "Missing Required Parameters",
        EC: 1,
        DT: "",
      });
    }
    if (password && password.length < 6) {
      return res.status(200).json({
        EM: "Your password must have more than 6 letters", // error message
        EC: "1", // error code
        DT: "", // data
      });
    }

    let data = await registerLoginService.registerNewUser(req.body.data);

    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: data.DT, // data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

// Login
const loginUser = async (req, res) => {
  try {
    if (!req.body.data.valueLogin || !req.body.data.password) {
      return res.status(200).json({
        EM: "Missing required parameters",
        EC: 1,
        DT: "",
      });
    }
    if (req.body.data.password && req.body.data.password.length < 6) {
      return res.status(200).json({
        EM: "Your password must have more than 6 letters",
        EC: 1,
        DT: "",
      });
    }
    // call service
    let data = await registerLoginService.handleLoginUser(req.body.data);

    // set cookie
    res.cookie("jwt", data.DT.access_token, { httpOnly: true, maxAge: 60 * 60 * 1000 });

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: [],
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
