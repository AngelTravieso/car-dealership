import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

// http://localhost:3000/cars
@Controller('cars')
// Para indicar que el Pipe se aplica global al controlador y sus métodos, así no lo copio en cada método
// @UsePipes( ValidationPipe )
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
    // new ParseUUIDPipe({ // se puede personalizar el pipe
    //     version: '5', // espero que el UUID sea con la version 5
    // })
    getCarById( @Param( 'id', ParseUUIDPipe ) id: string ) { // Obtener queryParam
        console.log({ id });
        return this.carsService.findOneById( id )
    }

    @Post()
    // Para validar el DTO que viene en el body
    // @UsePipes( ValidationPipe )
    // Se puede cambiar el nombre, aquí se cambio de Body a createCarDto
    createCar( @Body() createCarDto: CreateCarDto ) { // capturar body
        return createCarDto;
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any ) 
    {   
        console.log(id);
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
