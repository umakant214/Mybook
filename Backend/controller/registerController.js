const registerController = (req, res) => {
  try {
    res.json("okk");
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
