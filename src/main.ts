import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder().setTitle('Test');

  const document = SwaggerModule.createDocument(app, options.build(), {
    deepScanRoutes: true,
  });

  SwaggerModule.setup('/docs', app, document, {
    explorer: false,
    customSiteTitle: 'Test - Documentation',
  });

  await app.listen(3000);
}
bootstrap();
