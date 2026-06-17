import type { UserEntity } from './entities/user.entity.js';
import type { RegisterRequestDto } from '../auth/dtos/register.request.js';

export class UserRepository {

  private static users: UserEntity[] = [];

  async findAll(): Promise<UserEntity[]> {
    return UserRepository.users;
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    const user = UserRepository.users.find(u => u.username.toLowerCase() === username.toLowerCase());
    return user || null;
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = UserRepository.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    return user || null;
  }

  async create(dto: RegisterRequestDto): Promise<UserEntity> {
    const newUser: UserEntity = {
      id: crypto.randomUUID(),
      fullName: dto.fullName,
      username: dto.username,
      email: dto.email,
      password: dto.password
    };
    UserRepository.users.push(newUser);
    return newUser;
  }
}