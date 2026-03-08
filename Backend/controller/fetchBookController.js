import { bookModel } from "../model/bookModel.js";

const fetchBookController = async (req, res) => {
  try {
    const isExit = await bookModel.find();
    res.json({
      success: true,
      code: 200,
      message: "User Data Fetch Successfully !",
      data: isExit,
      error: false,
    });
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

export default fetchBookController;
