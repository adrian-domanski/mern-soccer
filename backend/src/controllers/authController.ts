import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import { generateJwt } from '../middlewares/jwtMethods';
import jwt from 'jsonwebtoken';

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const emailCheck = await User.findOne({ email });

  if (emailCheck) {
    return res.status(403).json({ error: 'Email is already in use' });
  }

  const user = await new User(req.body);

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = bcrypt.hashSync(password, salt);
    user.created_at = new Date();
    user.updated_at = new Date();
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  // check if user exists
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: 'Check credentials' });
  }

  // make sure that the password matches
  const validPassword = bcrypt.compareSync(password, user.password);

  if (!validPassword) {
    return res.status(401).json({ error: 'Check credentials' });
  }

  // return jwt token
  const token = await generateJwt(user._id, user.email);

  res.status(200).json({ user, token });
};

export const getCurrentUser = async (req: Request, res: Response) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const token_info: any = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await User.findOne({ email: token_info.email });

    if (!user) return res.status(400).json({ error: 'User not found' });
    const { email, username, role, ...extraUserData } = user;

    return res.status(200).json({ username, email, role, ...extraUserData });
  } catch (error) {
    return res.status(500).json({ error: "Couldn't get current user" });
  }
};
