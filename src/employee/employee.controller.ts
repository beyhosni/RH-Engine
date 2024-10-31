import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Post()
  create(@Body() employeeData: Employee): Promise<Employee> {
    return this.employeeService.create(employeeData);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() employeeData: Employee,
  ): Promise<Employee> {
    return this.employeeService.update(id, employeeData);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.employeeService.delete(id);
  }
}
