import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService], // Aquí colocamos servicios
  // lo que se exporta aquí es lo único que visualmente estará disponible en otros módulos
  exports: [ CarsService ],
})
export class CarsModule {}
