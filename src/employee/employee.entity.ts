// src/employee/employee.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Payroll } from "../payroll/payroll.entity";
import { Leave } from "../leave/leave.entity";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  position: string;

  @Column({ type: 'date' })
  hireDate: Date;

  @OneToMany(() => Payroll, (payroll) => payroll.employee)
  payrolls: Payroll[];

  @OneToMany(() => Leave, (leave) => leave.employee)
  leaves: Leave[];
}
