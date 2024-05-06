import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { configModule } from 'src/config/configure.root';
import { ConfigKeys } from 'src/shared/constants';
import { DataSource } from 'typeorm';

async function bootstrapDataSource(): Promise<DataSource> {
  const appContext = await NestFactory.createApplicationContext(configModule);
  const configService = appContext.get(ConfigService);

  return new DataSource({
    type: 'postgres',
    host: configService.get<string>(ConfigKeys.DB_PG_HOST),
    port: +configService.get<number>(ConfigKeys.DB_PG_PORT),
    username: configService.get<string>(ConfigKeys.DB_PG_USERNAME),
    password: configService.get<string>(ConfigKeys.DB_PG_PASSWORD),
    database: configService.get<string>(ConfigKeys.DB_PG_NAME),
    schema: configService.get<string>(ConfigKeys.DB_PG_SCHEMA),
    entities: ['dist/**/*.schema.{ts,js}'],
    migrations: ['dist/migrations/*.{ts,js}'],
  });
}

export default bootstrapDataSource();
