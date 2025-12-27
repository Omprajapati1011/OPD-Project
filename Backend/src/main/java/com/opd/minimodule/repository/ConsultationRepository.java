package com.opd.minimodule.repository;

import com.opd.minimodule.entity.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ConsultationRepository extends JpaRepository<Consultation, Long> {
    List<Consultation> findByAppointmentPatientId(Long patientId);
}
