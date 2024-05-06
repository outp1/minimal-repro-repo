import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentService } from './equipment.service';
import { EquipmentSchema } from './equipment.schema';
import { EquipmentController } from './equipment.controller';

@Module({
  controllers: [EquipmentController],
  providers: [EquipmentService],
  imports: [
    TypeOrmModule.forFeature([EquipmentSchema]),
  ],
})
export class EquipmentModule {}
