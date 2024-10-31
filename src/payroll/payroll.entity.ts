import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from '../employee/employee.entity';

@Entity()
export class Payroll {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.payrolls)
  employee: Employee;

  @Column()
  amount: number;

  @Column({ type: 'date' })
  payDate: Date;

  @Column()
  status: string; // ex: 'Paid' or 'Pending'
}
