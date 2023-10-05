import {forwardRef, Module} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {CompanySchema} from "./schemas/company.schema";
import {EmployeesModule} from "../employees/employees.module";

@Module({
  imports: [
      forwardRef(() => EmployeesModule),
      MongooseModule.forFeature([
            { name: 'Company', schema: CompanySchema},
          ]),
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService],
    exports: [CompaniesService]
})
export class CompaniesModule {}
