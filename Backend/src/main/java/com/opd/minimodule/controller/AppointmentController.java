package com.opd.minimodule.controller;

import com.opd.minimodule.entity.Appointment;
import com.opd.minimodule.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    public Appointment bookAppointment(@RequestBody Appointment appointment) {
        return appointmentService.bookAppointment(appointment);
    }

    @GetMapping
    public List<Appointment> getAppointments() {
        // For simplicity, returning all or filter by query parameters if needed
        // The requirement says "List appointments for today"
        return appointmentService.getAppointmentsForToday();
    }
}
