import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipment } from './equipment.entity';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class EquipmentService extends TypeOrmCrudService<Equipment> {
  constructor(
    @InjectRepository(Equipment)
    private equipmentRepository: Repository<Equipment>,
  ) {
    super(equipmentRepository);
  }

  async onModuleInit(): Promise<void> {
    await this.init_equipment();
  }

  async init_equipment(): Promise<void> {
    const newEquipment = [
      new Equipment('some', 'some1', 1),
      new Equipment('some', 'some2', 2),
      new Equipment('some', 'some3', 3),
    ];

    if (!await this.equipmentRepository.findOneBy({ brand: 'some' }))
      await this.equipmentRepository.save(newEquipment);
  }
}
