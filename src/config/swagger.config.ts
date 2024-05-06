import { registerAs } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as cors from 'cors';
import * as fs from 'fs';
import * as path from 'path';

export default registerAs('swagger', () => {
  return {
    setup: (app) => {
      app.use('/api-docs-json', cors());

      const readMeText = fs.readFileSync(path.join(process.cwd(), 'README.md'), 'utf-8');

      const swaggerOptions = new DocumentBuilder()
        .setTitle('equipment-catalog')
        .setDescription('equipment-catalog description')
        .setVersion('1.0.0')
        .setDescription(readMeText)
        .addTag('health')
        .setExternalDoc('Get API docs json', '/api-docs-json')
        .build();

      let swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);

      SwaggerModule.setup('api-docs', app, swaggerDocument);
    },
  };
});
