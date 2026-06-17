import { type Request, type Response } from 'express';
import { UserService } from './user.service.js';
import type { UserResponseDto } from './dtos/user.response.js';

export class UserController {
  constructor(private userService: UserService) {}

  getUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
      const users: UserResponseDto[] = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}