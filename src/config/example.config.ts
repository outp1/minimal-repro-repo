import { registerAs } from '@nestjs/config';

export default registerAs('exampleConfig', () => ({
  baseURL: process.env.BASE_URL,
  timeout: process.env.TIMEOUT,
  headers: { 'X-API-Key': process.env.API_KEY },
}));
