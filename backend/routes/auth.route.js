import express from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";

const router = express.Router();

// Ensure this route is correctly set up
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
