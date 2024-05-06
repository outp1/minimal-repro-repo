import { ConfigModule } from '@nestjs/config';

import exampleConfig from './example.config';
import swaggerConfig from './swagger.config';
import databaseConfig from './database.config';
import { ConfigKeys } from 'src/shared/constants';

const obn = process.env.OPENSHIFT_BUILD_NAMESPACE || process.env.ENVIRONMENT;

const defaultConfig = () => {
  return {
    [ConfigKeys.PORT]: +process.env.PORT || 3000,
    [ConfigKeys.ENVIRONMENT]: obn,
  };
};

export const configModule = ConfigModule.forRoot({
  envFilePath: '.env' + (obn ? `-${obn.split('-').pop()}`.toLowerCase() : ''),
  load: [defaultConfig, exampleConfig, swaggerConfig, databaseConfig],
  isGlobal: true,
  cache: true,
});
