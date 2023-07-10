import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validación global a nivel de aplicación, aplica para todos los DTO
  app.useGlobalPipes(
    new ValidationPipe({
      // Para remover la posible data basura que llegue del front, elimina las propiedades que no se esperan para el DTO
      whitelist: true,
      
      /*
      Para retornar las propiedades que el front no debe mandar
      Ejemplo:
      "message": [
        "property banana should not exist",
        "property puertas should not exist"
      ],
      */
      forbidNonWhitelisted: true,
    }),
  )

  await app.listen(3000);
}
bootstrap();
