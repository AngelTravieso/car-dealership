import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

        // Obtener car según el ID que me llega, esto es para validar que exista el ID
        let carDB = this.findOneById( id );

        // Si en el body viene un ID diferente al que se manda por queryParams arrojo la excepcion (esto es opcional)
        if( updateCarDto.id && updateCarDto.id !== id ) throw new BadRequestException('Car id is not valid');

        // Barrer mi arreglo de cars
        this.cars = this.cars.map( car => {
            // Si el el ID del carro es === al ID que estoy mandando
            if( car.id === id) {

                carDB = {
                    ...carDB, // exparsir las propiedades que tenga el carDB (el car de la DB)
                    // exparsir las propiedades que vengan actualizadas de la petición (esto sobreescribe las propiedades anteriores)
                    ...updateCarDto, // si aquí viene un ID
                    id, // este lo sobre escribe, para evitar que me manden algo parecido a un UUID en la petición
                }

                return carDB;
            }
            
            return car;
        });
        
        return carDB; // carro actualizado

    }


    delete( id: string ) {

        // verificar si el carro existe
        // const car = this.findOneById( id );
        this.findOneById( id );

        // Eliminar carro
        this.cars = this.cars.filter( car => car.id !== id );

    }

}
