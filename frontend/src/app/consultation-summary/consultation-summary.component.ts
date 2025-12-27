import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-consultation-summary',
    templateUrl: './consultation-summary.component.html',
    styleUrls: ['./consultation-summary.component.css']
})
export class ConsultationSummaryComponent implements OnInit {
    patients: any[] = [];
    selectedPatientId: number | null = null;
    history: any[] = [];

    appointments: any[] = []; // To select for new consultation
    selectedAppointment: any = null;

    newConsultation = {
        appointment: null,
        vitals: '',
        symptoms: '',
        notes: '',
        prescription: ''
    };

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.loadPatients();
        this.loadAppointments();
    }

    loadPatients() {
        this.apiService.getPatients().subscribe(data => this.patients = data);
    }

    loadAppointments() {
        this.apiService.getAppointments().subscribe(data => {
            // Filter only booked appointments? For simplicity show all
            this.appointments = data;
        });
    }

    onPatientSelect() {
        if (this.selectedPatientId) {
            this.apiService.getHistory(this.selectedPatientId).subscribe(data => {
                this.history = data;
            });
        }
    }

    save() {
        this.newConsultation.appointment = this.selectedAppointment;
        this.apiService.saveConsultation(this.newConsultation).subscribe(() => {
            alert('Consultation Saved');
            this.newConsultation = { appointment: null, vitals: '', symptoms: '', notes: '', prescription: '' };
            this.selectedAppointment = null;
            if (this.selectedPatientId) this.onPatientSelect(); // Refresh history
        });
    }
}
