import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigKeys } from 'src/shared/constants';

const typeOrmModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get<string>(ConfigKeys.DB_PG_HOST),
    port: +configService.get<number>(ConfigKeys.DB_PG_PORT),
    username: configService.get<string>(ConfigKeys.DB_PG_USERNAME),
    password: configService.get<string>(ConfigKeys.DB_PG_PASSWORD),
    database: configService.get<string>(ConfigKeys.DB_PG_NAME),
    schema: configService.get<string>(ConfigKeys.DB_PG_SCHEMA),
    autoLoadEntities: true,
    migrationsRun: configService.get<string>(ConfigKeys.ENVIRONMENT) == 'jest' ? true : false,
    migrations: ['dist/migrations/*.{ts,js}'],
    dropSchema: configService.get<string>(ConfigKeys.ENVIRONMENT) == 'jest' ? true : false,
  }),
});

export default typeOrmModule;
