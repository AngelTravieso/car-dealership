import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {
    // Debe ser un string
    @IsString()
    // Mínimo 1 letra
    @MinLength(1)
    name: string;

}
