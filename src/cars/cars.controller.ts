import { Controller, Get, Param } from '@nestjs/common';

// http://localhost/cars
@Controller('cars')
export class CarsController {

    private cars = ['Toyota', 'Honda', 'Jeep'];

    // El metodo get consumira este método
    @Get()
    getAllCars() {
        return this.cars;
    }

    @Get(':id')
    getCarById( @Param( 'id' ) id: string ) { // Obtener queryParam
        console.log({ id });
        return this.cars[id]
    }

}
