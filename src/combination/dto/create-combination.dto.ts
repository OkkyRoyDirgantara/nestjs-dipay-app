import {IsArray, isArray} from "class-validator";

export class CreateCombinationDto {

    @IsArray()
    n: Array<number>;
}
