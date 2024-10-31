// src/payroll/payroll.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { Payroll } from './payroll.entity';

@Controller('payrolls')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Get()
  findAll(): Promise<Payroll[]> {
    return this.payrollService.findAll();
  }

  @Post()
  create(@Body() payrollData: Payroll): Promise<Payroll> {
    return this.payrollService.create(payrollData);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() payrollData: Payroll,
  ): Promise<Payroll> {
    return this.payrollService.update(id, payrollData);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.payrollService.delete(id);
  }
}
