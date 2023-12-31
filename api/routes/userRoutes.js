import express from "express";
import {
  deleteUser,
  getUser,
  getUserById,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/getuser", getUser);
router.get("/getuser/:id", getUserById);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
