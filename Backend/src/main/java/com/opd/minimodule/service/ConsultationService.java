package com.opd.minimodule.service;

import com.opd.minimodule.entity.Consultation;
import com.opd.minimodule.entity.Appointment;
import com.opd.minimodule.repository.ConsultationRepository;
import com.opd.minimodule.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ConsultationService {
    @Autowired
    private ConsultationRepository consultationRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    public Consultation saveConsultation(Consultation consultation) {
        // Mark appointment as COMPLETED
        Appointment appt = consultation.getAppointment();
        if (appt != null) {
            appt.setStatus("COMPLETED");
            appointmentRepository.save(appt);
        }
        return consultationRepository.save(consultation);
    }

    public List<Consultation> getHistory(Long patientId) {
        return consultationRepository.findByAppointmentPatientId(patientId);
    }
}
