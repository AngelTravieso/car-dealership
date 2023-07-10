import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee',
        },
    ]

    
    findAll() {
        return this.cars;
    }


    findOneById( id: string ) {
        const car = this.cars.find(car => car.id === id);

        // if(!car) {
        //     // exceptionFilter
        //     throw new NotFoundException(`Car with id '${ id } not found`); // mensaje extra para el error
        // }

        if(!car) throw new NotFoundException(`Car with id '${ id } not found`);

        return car;
    }


    create( createCarDto: CreateCarDto) {
        
        // const { brand, model } = createCarDto;

        const car: Car = {
            id: uuid(),
            // exparsis propiedades
            ...createCarDto
            // brand,
            // model,
        }

        this.cars = [...this.cars, car];
        

        return car;
    }


    update( id: string, updateCarDto: UpdateCarDto ) {



    }

}
