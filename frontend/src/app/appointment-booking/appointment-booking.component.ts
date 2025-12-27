import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-appointment-booking',
    templateUrl: './appointment-booking.component.html',
    styleUrls: ['./appointment-booking.component.css']
})
export class AppointmentBookingComponent implements OnInit {
    appointments: any[] = [];
    patients: any[] = [];
    newAppointment = {
        patient: null,
        doctorName: '',
        appointmentDateTime: '',
        status: 'BOOKED'
    };

    doctors = ['Dr. Smith', 'Dr. Jones', 'Dr. Lee'];

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.loadAppointments();
        this.loadPatients();
    }

    loadAppointments() {
        this.apiService.getAppointments().subscribe(data => {
            this.appointments = data;
        });
    }

    loadPatients() {
        this.apiService.getPatients().subscribe(data => {
            this.patients = data;
        });
    }

    book() {
        this.apiService.bookAppointment(this.newAppointment).subscribe(() => {
            alert('Appointment Booked');
            this.newAppointment = { patient: null, doctorName: '', appointmentDateTime: '', status: 'BOOKED' };
            this.loadAppointments();
        });
    }
}
