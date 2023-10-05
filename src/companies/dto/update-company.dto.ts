import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import {IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class UpdateCompanyDto {
    @IsBoolean()
    @IsNotEmpty()
    is_active: boolean;
}
