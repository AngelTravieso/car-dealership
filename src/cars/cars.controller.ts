import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

// http://localhost:3000/cars
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

    // ':id/:status'
    @Get(':id')
    // ParseIntPipe literalmente cambia el dato a un number
    getCarById( @Param( 'id', ParseIntPipe ) id: number ) { // Obtener queryParam
        console.log({ id });
        return this.carsService.findOneById( id )
    }

    @Post()
    createCar( @Body() body: any ) { // capturar body
        return body;
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any ) 
    {
        return body;
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id: number ) {
        return {
            method: 'DELETE',
            id,
        }
    }

}
