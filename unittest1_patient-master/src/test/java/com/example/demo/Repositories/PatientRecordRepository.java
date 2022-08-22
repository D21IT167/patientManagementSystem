package com.example.demo.Repositories;

import com.example.demo.Entities.PatientRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface PatientRecordRepository extends JpaRepository<PatientRecord, Integer>{
}
