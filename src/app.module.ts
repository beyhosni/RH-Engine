import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { PayrollModule } from './payroll/payroll.module';
import { LeaveModule } from './leave/leave.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres_user',
      password: 'postgres_password',
      database: 'hr_management_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    EmployeeModule,
    PayrollModule,
    LeaveModule,
  ],
})
export class AppModule {}
