import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/user.model.js";
import "dotenv/config";
import jwt from "jsonwebtoken";

export const verifyUser = async (req, _, next) => {
  try {
    const token =
      req.headers.cookie
        ?.split(";")
        .find((cookie) => cookie.trim().startsWith("UserToken="))
        ?.split("=")[1] || req.header("Authorization")?.replace("Bearer ", "");
    console.log(token);
    if (!token) {
      return next(new ErrorHandler("Unauthorized Request", 402));
    }
    console.log(req.headers);

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      //console.log(decodedToken);

      const user = await User.findById(decodedToken?.id).select("-password");

      if (!user) {
        return next(new ErrorHandler("Invalid Access Token", 403));
      }

      req.user = user;
      next();
    } catch (verifyError) {
      return next(
        new ErrorHandler(
          `Token Verification Failed: ${verifyError.message}`,
          401
        )
      );
    }
  } catch (error) {
    return next(
      new ErrorHandler(error?.message || "Invalid Verification", 401)
    );
  }
};
