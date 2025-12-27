import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { ConsultationSummaryComponent } from './consultation-summary/consultation-summary.component';

const routes: Routes = [
    { path: 'patients', component: PatientRegistrationComponent },
    { path: 'appointments', component: AppointmentBookingComponent },
    { path: 'consultations', component: ConsultationSummaryComponent },
    { path: '', redirectTo: '/patients', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
