import {Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {AuthGuard} from "../auth/auth.guard";

@Controller()
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('api/companies/:id/employees')
  getEmployeesByCompanyId(@Param('id') id: String) {
    return this.employeesService.getEmployeesByCompanyId(id);
  }

  @Get('api/employees/:id')
  getEmployeeById(@Param('id') id: String) {
    return this.employeesService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Post('api/companies/:company_id/employees')
  addEmployee(@Param('company_id') company_id: String,@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(company_id,createEmployeeDto);
  }

  @UseGuards(AuthGuard)
  @Put('api/companies/:company_id/employees/:employee_id')
  updateEmployee(@Param('company_id') company_id: number, @Param('employee_id') employee_id: number, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.update(company_id, employee_id, updateEmployeeDto);
  }

  @UseGuards(AuthGuard)
  @Delete('api/employees/:id')
  deleteEmployeeById(@Param('id') id: String) {
    return this.employeesService.remove(id);
  }
}
