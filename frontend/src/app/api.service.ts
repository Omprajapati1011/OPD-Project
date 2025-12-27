import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) { }

    // Patients
    getPatients(query?: string): Observable<any[]> {
        let url = `${this.baseUrl}/patients`;
        if (query) {
            url += `?query=${query}`;
        }
        return this.http.get<any[]>(url);
    }

    registerPatient(patient: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/patients`, patient);
    }

    // Appointments
    getAppointments(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/appointments`);
    }

    bookAppointment(appointment: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/appointments`, appointment);
    }

    // Consultations
    saveConsultation(consultation: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/consultations`, consultation);
    }

    getHistory(patientId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/consultations/patient/${patientId}`);
    }
}
