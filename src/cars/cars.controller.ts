import { Controller, Get } from '@nestjs/common';

// http://localhost/cars
@Controller('cars')
export class CarsController {

    // El metodo get consumira este método
    @Get()
    getAllCars() {
        return ['Toyota', 'Honda', 'Jeep'];
    }

}
