import { UserRepository } from './user.repository.js';
import type { UserResponseDto } from './dtos/user.response.js';
import type { UserEntity } from './entities/user.entity.js';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getAllUsers(): Promise<UserResponseDto[]> {
    const users = await this.userRepository.findAll();
    return users.map(user => this.toResponseDto(user));
  }

  private toResponseDto(user: UserEntity): UserResponseDto {
    return {
      id: user.id,
      fullName: user.fullName,
      username: user.username,
      email: user.email
    };
  }
}