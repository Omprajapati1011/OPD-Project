package com.opd.minimodule.controller;

import com.opd.minimodule.entity.Consultation;
import com.opd.minimodule.service.ConsultationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/consultations")
@CrossOrigin(origins = "http://localhost:4200")
public class ConsultationController {
    @Autowired
    private ConsultationService consultationService;

    @PostMapping
    public Consultation saveConsultation(@RequestBody Consultation consultation) {
        return consultationService.saveConsultation(consultation);
    }

    @GetMapping("/patient/{patientId}")
    public List<Consultation> getHistory(@PathVariable Long patientId) {
        return consultationService.getHistory(patientId);
    }
}
