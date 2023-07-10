import { IsString } from "class-validator";

export class CreateCarDto {
    // decoradores de class-validator
    @IsString({
        // para cambiar el mensaje de error en la respuesta
        // message: `The brand most be a cool string` 
    })
    readonly brand: string;

    @IsString()
    readonly model: string;

}