import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import {Company} from "./schemas/company.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {CompanyInterface} from "./company.interface";

@Injectable()
export class CompaniesService {
  constructor(
        @InjectModel('Company') private readonly companyModel: Model<CompanyInterface>,
  ) {
  }
  async create(createCompanyDto: CreateCompanyDto) {
    try {
        if (!createCompanyDto.company_name) {
            return {
                "status": 400,
                "code": "400",
                "data": null,
                "message": "Company name is required"
            }
        }
      let findCompany = await this.companyModel.findOne({company_name: createCompanyDto.company_name});
        if (findCompany) {
            return {
                "status": 400,
                "code": "400",
                "data": null,
                "message": "Company name already exists"
            }
        }
      const company = await new this.companyModel(createCompanyDto);
      return company.save();
    }catch (e) {
      return {
        "status": 400,
        "code": "400",
        "data": null,
        "message": e.message
      }
    }
  }

  async findAll() {
      try {
          const companies = await this.companyModel.find();
          if (companies.length === 0) {
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
              "data": {
                  "count": companies.length,
                  "rows": companies
              },
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

  findOne(id: String) {
      let filter = {_id: id};
        let company = this.companyModel.findOne(filter);
        return company;
  }

  async update(id: string) {
    try {
      let findCompany = await this.companyModel.findById(id);
        if (!findCompany) {
            throw new Error('Data is not found');
        }
        if (findCompany.is_active) {
            return {
                "status": 400,
                "code": "400",
                "data": null,
                "message": "Company is already active"
            }
        }
      const company = await this.companyModel.findByIdAndUpdate(id,
          {
            is_active: true
          }
      ).populate('is_active');
      return {
        "status": 201,
        "code": "201",
        "data": {
          "id": company._id,
          "is_active": true
        },
        "message": "Success"
      }
    }catch (e) {
      return {
        "status": 422,
        "code": "422",
        "data": null,
        "message": e.message
      }
    }
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
