import { type Request, type Response } from 'express';
import { AuthService } from './auth.service.js';
import type { RegisterRequestDto } from './dtos/register.request.js';
import type { LoginRequestDto } from './dtos/login.request.js';
import type { AuthResponseDto } from './dtos/auth.response.js';

export class AuthController {
  constructor(private authService: AuthService) {}

  register = async (req: Request, res: Response): Promise<void> => {
    try {
      const dto: RegisterRequestDto = req.body;

      if (!dto.fullName || !dto.username || !dto.email || !dto.password) {
        res.status(400).json({ message: 'Todos los campos (fullName, username, email, password) son requeridos.' });
        return;
      }

      const response: AuthResponseDto = await this.authService.register(dto);
      res.status(201).json(response);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const dto: LoginRequestDto = req.body;

      if (!dto.username || !dto.password) {
        res.status(400).json({ message: 'Username y password son requeridos.' });
        return;
      }

      const response: AuthResponseDto = await this.authService.login(dto);
      res.status(200).json(response);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  };
}