import { bookModel } from "../model/bookModel.js";

const updateBookController = async (req, res) => {
  try {
    const _id = req.params._id;
    const { Title, VerSion, Price, Language } = req.body;
    const UpdatedData = await bookModel.updateOne(
      { _id: _id },
      { $set: { Title, VerSion, Price, Language } },
    );
    res.json({
      success: true,
      code: 200,
      message: "Book Record Updated Successfully !",
      data: UpdatedData,
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

export default updateBookController;
