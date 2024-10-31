// src/payroll/payroll.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payroll } from './payroll.entity';

@Injectable()
export class PayrollService {
  constructor(
    @InjectRepository(Payroll)
    private payrollRepository: Repository<Payroll>,
  ) {}

  findAll(): Promise<Payroll[]> {
    return this.payrollRepository.find();
  }

  create(payrollData: Payroll): Promise<Payroll> {
    const payroll = this.payrollRepository.create(payrollData);
    return this.payrollRepository.save(payroll);
  }

  update(id: number, payrollData: Payroll): Promise<Payroll> {
    return this.payrollRepository.save({ ...payrollData, id });
  }

  delete(id: number): Promise<void> {
    return this.payrollRepository.delete(id).then(() => {});
  }
}
