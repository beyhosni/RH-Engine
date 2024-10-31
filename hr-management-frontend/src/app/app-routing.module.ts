import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';

// Déclaration des routes
const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'leave-requests', component: LeaveRequestsComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
