import {IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";
import {ObjectId} from "mongoose";

enum JobTitle {
    manager = 'manager',
    director = 'director',
    staff = 'staff',
}
export class CreateEmployeeDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @MinLength(5)
    @MaxLength(255)
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    phone_number: string;
    @IsEnum(JobTitle)
    jobtitle: JobTitle = JobTitle.staff;

    company_id: ObjectId;
}
