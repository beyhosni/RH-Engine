import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css'],
})
export class LeaveRequestsComponent implements OnInit {
  leaveRequests: any[] = [];
  newLeaveRequest = { startDate: '', endDate: '', type: '' };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLeaveRequests().subscribe((data) => {
      this.leaveRequests = data;
    });
  }

  submitLeaveRequest(): void {
    this.apiService.addLeaveRequest(this.newLeaveRequest).subscribe(() => {
      this.ngOnInit(); // Recharge la liste des demandes après ajout
    });
  }
}
