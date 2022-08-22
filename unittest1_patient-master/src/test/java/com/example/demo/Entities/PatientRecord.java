package com.example.demo.Entities;



import javax.persistence.*;

@Entity
@Table(name = "patient")
public class PatientRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long PatientID;

    @Column(name = "name")
    public String name;

    @Column(name = "age")
    public Integer age;

    @Column(name = "address")
    public String address;

    public PatientRecord(long patientID, String name, Integer age, String address) {
        PatientID = patientID;
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public PatientRecord() {

    }


    public long getPatientID() {
        return PatientID;
    }

    public void setPatientID(long patientID) {
        PatientID = patientID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getPatientId() {
        return null;
    }
}
