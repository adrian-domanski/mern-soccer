import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import { Types } from 'mongoose';
import { generateJwt } from '../middlewares/jwtMethods';

export const signUp = async (req: Request, res: Response) => {
  const { username, email, password, role } = req.body;
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

export const signIn = async (req: Request, res: Response) => {
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
