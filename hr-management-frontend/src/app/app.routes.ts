import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { RouterModule } from '@nestjs/core';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'leave-requests', component: LeaveRequestsComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
