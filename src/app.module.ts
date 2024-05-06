import { Global, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configModule } from './config/configure.root';
import { EquipmentModule } from './equipment/equipment.module';
import typeOrmModule from './config/typeorm.root';

@Global()
@Module({
  imports: [configModule, typeOrmModule, EquipmentModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
