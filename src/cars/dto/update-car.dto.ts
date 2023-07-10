import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional() // para indicar que la propiedad es opcional
    readonly id?: string; // Es conveniente colocar el id? "?" para indicar que es opcional

    // decoradores de class-validator
    @IsString({
        // para cambiar el mensaje de error en la respuesta
        // message: `The brand most be a cool string` 
    })
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    // El modelo mínimo debe venir con 3 letras
    // @MinLength(3)
    readonly model?: string;

}