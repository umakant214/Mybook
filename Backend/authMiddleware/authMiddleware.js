import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  if (!req?.headers?.authorization) {
    res.json({
      success: false,
      code: 400,
      message: "Token Required",
      data: [],
      error: true,
    });
  }
  const rawToken = req.headers.authorization.split(" ");
  //   console.log("Actual Token:", rawToken[1]);

  const token = rawToken[1];
  jwt.verify(token, "jwt_secret", (err, decode) => {
    if (err) {
      res.json({
        success: false,
        code: 400,
        message: "Token Expired Or Invalid Token",
        data: [],
        error: true,
      });
    } else {
      req.user = decode;
      next();
    }
  });
};

export default authMiddleware;
