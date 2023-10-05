import {IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";
import {DefaultValuePipe} from "@nestjs/common";

export class CreateCompanyDto {
    company_name: string;
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    telephone_number: string = null;

    @IsBoolean()
    @IsNotEmpty()
    is_active: boolean = false;

    @IsString()
    @MinLength(10)
    @MaxLength(50)
    address: string;
}
