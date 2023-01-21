// import User from "../models/user.js";
import { Request, Response, NextFunction } from "express";

export async function signin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  try {
    
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }

}

export async function signup(req: Request, res: Response, next: NextFunction) {
  // const { email, password, confirmPassword, firstName, lastName, phoneNumber } = req.body;
  const { email, password } = req.body;
  console.log(email, password);

  try {
    if (email === '') {
      return res.status(400).json({
        message: "Must have an email address",
      });
    }
    if (password === '') {
      return res.status(400).json({
        message: "Must have a password",
      });
    }

    const name = `email: ${email} <=> password: ${password}`;
    return res.status(200).json({ name });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}
