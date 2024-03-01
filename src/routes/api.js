import express from "express";
import registerLoginController from "../controllers/registerLoginController";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";

const router = express.Router();

const adminRoute = (app) => {
  // login and register
  router.post("/user/register", registerLoginController.registerUser);
  router.post("/user/login", registerLoginController.loginUser);
  // router.get("/login", userController.loginUser);

  // User
  router.get("/user/read", userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);

  // Group
  router.get("/group/read", groupController.readFunc);

  return app.use("/api/v1", router);
};

export default adminRoute;
