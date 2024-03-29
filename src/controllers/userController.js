import userService from "../services/userService";

const readFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let { page, limit } = req.query;
      let data = await userService.getUserWithPagination(+page, +limit);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      let data = await userService.getAllUser();
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const createFunc = async (req, res) => {
  try {
    const { lastName, firstName, phone, password, email, sex, groupId } = req.body.data;
    if (!lastName || !firstName || !phone || !password || !email || !sex || !groupId) {
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

    let data = await userService.createNewUser(req.body.data);
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

const updateFunc = async (req, res) => {
  try {
    let data = await userService.updateUser(req.body.data);
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

const deleteFunc = async (req, res) => {
  try {
    let { id } = req.body;
    let data = await userService.deleteOneUser(id);
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
      DT: "",
    });
  }
};

module.exports = { readFunc, createFunc, updateFunc, deleteFunc };
