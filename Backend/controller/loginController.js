import { userModel } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isExit = await userModel.findOne({ email });
    if (isExit) {
      const isMatch = await bcrypt.compare(password, isExit.password);
      if (isMatch) {
        const payload = { email };
        const token = jwt.sign(payload, "jwt_secret", { expiresIn: "24h" });
        res.json({
          success: true,
          code: 200,
          message: "Login Successfully !",
          data: isExit,
          token,
          error: false,
        });
      } else {
        res.json({
          success: false,
          code: 400,
          message: "Invalid Password , Login Failed !",
          data: [],
          error: true,
        });
      }
    } else {
      res.json({
        success: false,
        code: 404,
        message: "User Not Found",
        data: [],
        error: true,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      code: 500,
      message: "Internal Server Error",
      data: [],
      error: true,
    });
  }
};

export default loginController;
