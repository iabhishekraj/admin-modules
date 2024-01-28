import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.GLOBAL_ROUTE_PREFIX);

  const config = new DocumentBuilder()
    .setTitle('Admin Module Service API')
    .setDescription('API Documents for Admin Module Service API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${process.env.GLOBAL_ROUTE_PREFIX}/docs`, app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
