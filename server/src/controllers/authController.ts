import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

export const register = async (req: Request, res: Response): Promise<void> => {
  console.log('Register endpoint hit:', req.body); // Add this line
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    console.error('Registration error:', err);
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = await loginUser(req.body);
    res.status(200).json({ token });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};

export const getMe = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json(req.user);
};