import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  create(employeeData: Employee): Promise<Employee> {
    const employee = this.employeeRepository.create(employeeData);
    return this.employeeRepository.save(employee);
  }

  update(id: number, employeeData: Employee): Promise<Employee> {
    return this.employeeRepository.save({ ...employeeData, id });
  }

  delete(id: number): Promise<void> {
    return this.employeeRepository.delete(id).then(() => {});
  }
}
