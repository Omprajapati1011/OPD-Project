package com.opd.minimodule.repository;

import com.opd.minimodule.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    List<Patient> findByNameContaining(String name);

    List<Patient> findByPhoneNumberContaining(String phoneNumber);
}
