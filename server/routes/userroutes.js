import express from "express";
import { testUser, registerUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

// Test route
router.get("/test", testUser);

// Add user
router.post("/", registerUser);



// Get all users
router.get("/", getUsers);

export default router;
