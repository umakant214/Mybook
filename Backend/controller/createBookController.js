import { bookModel } from "../model/bookModel.js";
const createBookController = async (req, res) => {
  try {
    const { Title, VerSion, Price, Language } = req.body;
    const isExit = await bookModel.findOne({ Title });
    if (isExit) {
      res.json({
        success: false,
        code: 400,
        message: "Book already Exit",
        data: [],
        error: true,
      });
    } else {
      const data = new bookModel({ Title, VerSion, Price, Language });
      const result = await data.save();
      res.json({
        success: true,
        code: 200,
        message: "Book Details Created Successfully !",
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

export default createBookController;
