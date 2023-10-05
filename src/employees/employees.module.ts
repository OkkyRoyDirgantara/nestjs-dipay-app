import {forwardRef, Module} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {EmployeeSchema} from "./schemas/employee.schema";
import {CompaniesService} from "../companies/companies.service";
import {CompaniesModule} from "../companies/companies.module";

@Module({
  imports: [
      forwardRef(() => CompaniesModule),
      MongooseModule.forFeature([
            { name: 'Employee', schema: EmployeeSchema},
          ]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
