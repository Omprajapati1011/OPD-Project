import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { ConsultationSummaryComponent } from './consultation-summary/consultation-summary.component';

@NgModule({
    declarations: [
        AppComponent,
        PatientRegistrationComponent,
        AppointmentBookingComponent,
        ConsultationSummaryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
