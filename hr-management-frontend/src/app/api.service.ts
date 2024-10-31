import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees`);
  }

  addEmployee(employeeData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/employees`, employeeData);
  }

  getAttendances(): Observable<any> {
    return this.http.get(`${this.baseUrl}/attendance`);
  }

  getLeaveRequests(): Observable<any> {
    return this.http.get(`${this.baseUrl}/leave-requests`);
  }

  addLeaveRequest(leaveRequestData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/leave-requests`, leaveRequestData);
  }
}
