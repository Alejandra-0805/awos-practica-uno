import { CatalogRepository } from './catalog.repository.js';
import type { CreateCatalogDto } from './dtos/create-catalog.dto.js';
import type { CatalogItemEntity } from './entities/catalog.entity.js';

export class CatalogService {
  constructor(private catalogRepository: CatalogRepository) {}

  async getAllItems(): Promise<CatalogItemEntity[]> {
    return await this.catalogRepository.findAll();
  }

  async createItem(dto: CreateCatalogDto): Promise<CatalogItemEntity> {
    if (dto.price <= 0) {
      throw new Error('El precio debe ser mayor a cero.');
    }
    return await this.catalogRepository.create(dto);
  }
}