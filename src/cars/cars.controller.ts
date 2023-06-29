import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

// http://localhost/cars
@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {}

    // El metodo get consumira este método
    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    // ParseIntPipe literalmente cambia el dato a un number
    getCarById( @Param( 'id', ParseIntPipe ) id: number ) { // Obtener queryParam
        console.log({ id });
        return this.carsService.findOneById( id )
    }

}
