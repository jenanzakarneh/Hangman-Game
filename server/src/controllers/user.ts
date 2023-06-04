import { RequestHandler } from "express";
import createHttpError from "http-errors";
import userModel from "../models/user";
import bcrypt from "bcryptjs";
import { issueJwt } from "../utilities/jwtUtils";

export const singUp: RequestHandler = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log("Request body =", req.body);
  try {
    if (!username || !email || !password)
      throw createHttpError(
        400,
        "Paratmeters are missing.\n Please fill them and try again."
      );
    const existingUsename = await userModel.findOne({
      usename: username,
    });
    if (existingUsename)
      throw createHttpError(
        409,
        "This username is registered. \nPlease try another one or login instead."
      );
    const existingEmail = await userModel.findOne({
      email: email,
    });
    if (existingEmail)
      throw createHttpError(
        409,
        "This email is registered.\n Please try another one or login instead."
      );

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      usename: username,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({ created: true });
  } catch (error) {
    next(error);
  }
};

export const signIn: RequestHandler = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password)
      throw createHttpError(400, "Missing parameteres.");

    const user = await userModel
      .findOne({ usename: username })
      .select("+email +password")
      .exec();
    if (!user) throw createHttpError(401, "Invalid credentials.");

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw createHttpError(401, "Invalid credentials.");
    //create token for the user and send it back
    const token = issueJwt(user._id.toString());

    res.status(201).json(token);
  } catch (error) {
    next(error);
  }
};
