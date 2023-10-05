import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
enum JobTitle {
    manager = 'manager',
    director = 'director',
    staff = 'staff',
}

export class UpdateEmployeeDto {
    name: String;
    email: String;
    phone_number: String;
    jobtitle: JobTitle;
    company_id: String;
}
