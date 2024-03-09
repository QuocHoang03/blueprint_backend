import express from "express";
import registerLoginController from "../controllers/registerLoginController";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";
import groupRoleController from "../controllers/groupRoleController";
import roleController from "../controllers/roleController";
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
  router.get("/group/read", groupController.readFunc);
  router.post("/group/create", groupController.createFunc);
  router.put("/group/update", groupController.updateFunc);
  router.delete("/group/delete", groupController.deleteFunc);

  // Group Role
  router.get("/group-role/read", groupRoleController.readFunc);
  router.post("/group-role/create", groupRoleController.createFunc);
  router.put("/group-role/update", groupRoleController.updateFunc);
  router.delete("/group-role/delete", groupRoleController.deleteFunc);

  // Role
  router.get("/role/read", roleController.readFunc);
  router.post("/role/create", roleController.createFunc);
  router.put("/role/update", roleController.updateFunc);
  router.delete("/role/delete", roleController.deleteFunc);

  return app.use("/api/v1", router);
};

export default adminRoute;
