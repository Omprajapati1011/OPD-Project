import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-patient-registration',
    templateUrl: './patient-registration.component.html',
    styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
    patients: any[] = [];
    searchQuery: string = '';
    newPatient = {
        name: '',
        gender: 'Male',
        age: null,
        phoneNumber: ''
    };

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.loadPatients();
    }

    loadPatients() {
        this.apiService.getPatients(this.searchQuery).subscribe(data => {
            this.patients = data;
        });
    }

    register() {
        this.apiService.registerPatient(this.newPatient).subscribe(() => {
            alert('Patient Registered Successfully');
            this.newPatient = { name: '', gender: 'Male', age: null, phoneNumber: '' };
            this.loadPatients();
        });
    }
}
