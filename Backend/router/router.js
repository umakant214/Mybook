import express from "express";
import registerController from "../controller/registerController.js";
import loginController from "../controller/loginController.js";
import createBookController from "../controller/createBookController.js";
import fetchBookController from "../controller/fetchBookController.js";
import deleteBookController from "../controller/deleteBookController.js";
import updateBookController from "../controller/updateBookController.js";
import authMiddleware from "../authMiddleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/createBook", authMiddleware, createBookController);
router.get("/fetchBook", authMiddleware, fetchBookController);
router.delete("/deleteBook/:_id", authMiddleware, deleteBookController);
router.put("/updateBook/:_id", authMiddleware, updateBookController);

export default router;
