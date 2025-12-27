package com.opd.minimodule.service;

import com.opd.minimodule.entity.Appointment;
import com.opd.minimodule.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;

    public Appointment bookAppointment(Appointment appointment) {
        appointment.setStatus("BOOKED");
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAppointmentsForToday() {
        LocalDateTime start = LocalDateTime.now().withHour(0).withMinute(0).withSecond(0);
        LocalDateTime end = LocalDateTime.now().withHour(23).withMinute(59).withSecond(59);
        return appointmentRepository.findByAppointmentDateTimeBetween(start, end);
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }
}
