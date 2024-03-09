import express from "express";
import registerLoginController from "../controllers/registerLoginController";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";

const router = express.Router();

const adminRoute = (app) => {
  // login and register
  router.post("/user/register", registerLoginController.registerUser);
  router.post("/user/login", registerLoginController.loginUser);
  // router.get("/login", userController.loginUser);

  // User
  router.get("/user/read", checkUserJWT, checkUserPermission, userController.readFunc);
  router.post("/user/create", checkUserJWT, checkUserPermission, userController.createFunc);
  router.put("/user/update", checkUserJWT, checkUserPermission, userController.updateFunc);
  router.delete("/user/delete", checkUserJWT, checkUserPermission, userController.deleteFunc);

  // Group
  router.get("/group/read", checkUserJWT, checkUserPermission, groupController.readFunc);

  return app.use("/api/v1", router);
};

export default adminRoute;
