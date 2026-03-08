import { bookModel } from "../model/bookModel.js";

const deleteBookController = async (req, res) => {
  try {
    const _id = req.params._id;
    const deletedData = await bookModel.deleteOne({ _id: _id });
    res.json({
      success: true,
      code: 200,
      message: "Book Record Deleted Successfully !",
      data: deletedData,
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

export default deleteBookController;
