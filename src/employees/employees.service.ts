import {forwardRef, Inject, Injectable} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {EmployeeInterface} from "./employee.interface";
import {CompanyInterface} from "../companies/company.interface";
import {CompaniesService} from "../companies/companies.service";

@Injectable()
export class EmployeesService {
  constructor(
      @InjectModel('Employee') private readonly employeeModel: Model<EmployeeInterface>,

      @Inject(forwardRef(() => CompaniesService))
        private companieService: CompaniesService
  ) {
  }
  async create(company_id: String, createEmployeeDto: CreateEmployeeDto) {
    try {
        let findEmail = await this.employeeModel.findOne({email: createEmployeeDto.email});
        if (findEmail) {
            return {
                "status": 409,
                "code": "409",
                "data": null,
                "message": "Email already exists"
            }
        }
      let data = createEmployeeDto;
        if (!data.name) {
            return {
                "status": 400,
                "code": "400",
                "data": null,
                "message": "Name is required"
            }
        }
      const employee = await new this.employeeModel(createEmployeeDto);
      employee.company_id = company_id;

      return employee.save();
    }catch (e) {
      return {
        "status": 400,
        "code": "400",
        "data": null,
        "message": e.message
      }
    }
  }

  findAll() {
    return `This action returns all employees`;
  }

  async findOne(id: String) {
    let filter = {_id: id};
    let employee = await this.employeeModel.findOne(filter);
    if (!employee) {
        return {
            "status": 422,
            "code": "422",
            "data": null,
            "message": "Data is not found"
        }
    }
    return {
        "status": 200,
        "code": "200",
        "data": employee,
        "message": "Success"
    }
  }

  async update(company_id: number, employee_id: number, updateEmployeeDto: UpdateEmployeeDto) {
      let filter = {_id: employee_id, company_id: company_id};
      let findEmail = await this.employeeModel.findOne({email: updateEmployeeDto.email});
        if (findEmail) {
            return {
                "status": 409,
                "code": "409",
                "data": null,
                "message": "Email already exists"
            }
        }
        let data = updateEmployeeDto;
        if (!data.name) {
            return {
                "status": 400,
                "code": "400",
                "data": null,
                "message": "Name is required"
            }
        }
        await this.employeeModel.updateOne(filter, updateEmployeeDto);
        return {
            "status": 200,
            "code": "200",
            "data": {
                "id": employee_id,
                "company_id": company_id,
            },
            "message": "Success"
        }
  }

  async remove(id: String) {
    try {
      let filter = {_id: id};
        const employee = await this.employeeModel.deleteOne(filter);
        return {
            "status": 204,
            "code": "204",
            "data": employee,
            "message": "Data is deleted"
        }
    }catch (e) {
      return {
        "status": 400,
        "code": "400",
        "data": null,
        "message": e.message
      }
    }
  }

    async getEmployeesByCompanyId(id: String) {
        let filter = {company_id: id};
        let employee = await this.employeeModel.find(filter);
        if (employee.length === 0) {
            return {
                "status": 422,
                "code": "422",
                "data": null,
                "message": "Data is not found"
            }
        }
        let company = await this.companieService.findOne(id);

        let data= {
            id: company._id,
            company_name: company.company_name,
            is_active: company.is_active,
            employees: []
        }
        employee.forEach((item) => {
            data.employees.push({
                id: item._id,
                name: item.name,
                phone_number: item.phone_number,
                jobtitle: item.jobtitle,
            })
        })

        return {
            "status": 200,
            "code": "200",
            "data": data,
            "message": "Success"
        }
    }
}
