import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment.entity';
import { Crud, CrudController } from '@dataui/crud';

@Crud({
  model: {
    type: Equipment,
  },
  routes: {
    only: ['getManyBase'],
  },
})
@Controller(`/equipment`)
@ApiExtraModels(Equipment)
@ApiTags('Equipment')
export class EquipmentController implements CrudController<Equipment> {
  constructor(public service: EquipmentService) {}
}
