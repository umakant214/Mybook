import { userModel } from "../model/userModel.js";
import bcrypt from "bcrypt";
const registerController = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const isExit = await userModel.findOne({ email });
    if (isExit) {
      res.json({
        success: false,
        code: 400,
        message: "User already Exit",
        data: [],
        error: true,
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const hashConfirmPassword = await bcrypt.hash(confirmPassword, 10);
      const data = new userModel({
        name,
        email,
        password: hashPassword,
        confirmPassword: hashConfirmPassword,
      });
      const result = await data.save();
      res.json({
        success: true,
        code: 200,
        message: "Registration Successfully !",
        data: result,
        error: false,
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

export default registerController;
