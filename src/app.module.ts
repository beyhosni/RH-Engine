import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';

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
  ],
})
export class AppModule {}
