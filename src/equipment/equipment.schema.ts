import { EntitySchema } from 'typeorm';
import { Equipment } from './equipment.entity';

export const EquipmentSchema = new EntitySchema<Equipment>({
  name: 'Equipment',
  target: Equipment,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: 'increment',
    },
    brand: {
      type: String,
    },
    modelName: {
      type: String,
      unique: true,
    },
  },
});
