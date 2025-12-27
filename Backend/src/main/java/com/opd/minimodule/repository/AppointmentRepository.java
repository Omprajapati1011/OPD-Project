package com.opd.minimodule.repository;

import com.opd.minimodule.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.time.LocalDateTime;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByPatientId(Long patientId);

    List<Appointment> findByAppointmentDateTimeBetween(LocalDateTime start, LocalDateTime end);
}
