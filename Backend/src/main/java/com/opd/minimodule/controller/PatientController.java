package com.opd.minimodule.controller;

import com.opd.minimodule.entity.Patient;
import com.opd.minimodule.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @PostMapping
    public Patient registerPatient(@RequestBody Patient patient) {
        return patientService.registerPatient(patient);
    }

    @GetMapping
    public List<Patient> getPatients(@RequestParam(required = false) String query) {
        if (query != null && !query.isEmpty()) {
            return patientService.searchPatients(query);
        }
        return patientService.getAllPatients();
    }
}
