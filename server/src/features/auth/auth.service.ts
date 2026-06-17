import { UserRepository } from '../user/user.repository.js';
import type { RegisterRequestDto } from './dtos/register.request.js';
import type { LoginRequestDto } from './dtos/login.request.js';
import type { AuthResponseDto } from './dtos/auth.response.js';
import type { UserEntity } from '../user/entities/user.entity.js';

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async register(dto: RegisterRequestDto): Promise<AuthResponseDto> {
    const existingUser = await this.userRepository.findByUsername(dto.username);
    if (existingUser) {
      throw new Error('Username ya esta ocupado');
    }

    const existingEmail = await this.userRepository.findByEmail(dto.email);
    if (existingEmail) {
      throw new Error('Email ya esta registrado');
    }

    const userEntity = await this.userRepository.create(dto);
    return this.toAuthResponseDto(userEntity);
  }

  async login(dto: LoginRequestDto): Promise<AuthResponseDto> {
    const user = await this.userRepository.findByUsername(dto.username);
    if (!user) {
      throw new Error('Credenciales inválidas.');
    }

    if (user.password !== dto.password) {
      throw new Error('Credenciales inválidas.');
    }

    return this.toAuthResponseDto(user);
  }

  private toAuthResponseDto(user: UserEntity): AuthResponseDto {
    return {
      id: user.id,
      fullName: user.fullName,
      username: user.username,
      email: user.email
    };
  }
}