import { ConfigKeys } from 'src/shared/constants';

export default () => ({
  [ConfigKeys.DB_PG_PORT]: process.env.DB_PG_PORT || 5432,
  [ConfigKeys.DB_PG_HOST]: process.env.DB_PG_HOST,
  [ConfigKeys.DB_PG_USERNAME]: process.env.DB_PG_USERNAME,
  [ConfigKeys.DB_PG_PASSWORD]: process.env.DB_PG_PASSWORD,
  [ConfigKeys.DB_PG_NAME]: process.env.DB_PG_NAME,
  [ConfigKeys.DB_PG_SCHEMA]: process.env.DB_PG_SCHEMA,
});
