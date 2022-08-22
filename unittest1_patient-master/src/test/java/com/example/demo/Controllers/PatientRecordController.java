package com.example.demo.controllers;

import com.example.demo.Entities.PatientRecord;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.Repositories.PatientRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class PatientRecordController {
    @Autowired
    private PatientRecordRepository patientRecordRepository;


    @GetMapping("/patient")
    public List<PatientRecord> getAllPatient(){
        return patientRecordRepository.findAll();
    }


    @PostMapping("/patients")
    public PatientRecord createEmployee(@RequestBody PatientRecord patientRecord) {
        return patientRecordRepository.save(patientRecord);
    }


    @GetMapping("/patient/{id}")
    public ResponseEntity<PatientRecord> getPatientById(@PathVariable Integer PatientID) {
        PatientRecord patientRecord = patientRecordRepository.findById(PatientID)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + PatientID));
        return ResponseEntity.ok(patientRecord);
    }



    @PutMapping("/patient/{id}")
    public ResponseEntity<PatientRecord> updatePatient(@PathVariable Integer PatientId, @RequestBody PatientRecord patientRecord, @PathVariable String id){
        PatientRecord patient = patientRecordRepository.findById(PatientId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + PatientId));

        patientRecord.setName(patientRecord.getName());
        patientRecord.setAddress(patientRecord.getAddress());

        PatientRecord updatedPatient = patientRecordRepository.save(patientRecord);
        return ResponseEntity.ok(updatedPatient);
    }


    @DeleteMapping("/patient/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable Integer PatientId, @PathVariable String id){
        PatientRecord patientRecord = patientRecordRepository.findById(PatientId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + PatientId));

        patientRecordRepository.delete(patientRecord);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
