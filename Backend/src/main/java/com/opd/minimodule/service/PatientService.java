package com.opd.minimodule.service;

import com.opd.minimodule.entity.Patient;
import com.opd.minimodule.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    public Patient registerPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public List<Patient> searchPatients(String query) {
        // Simple search: try name first, then phone
        List<Patient> byName = patientRepository.findByNameContaining(query);
        if (!byName.isEmpty())
            return byName;
        return patientRepository.findByPhoneNumberContaining(query);
    }
}
