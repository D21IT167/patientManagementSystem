import axios from 'axios';

const patient_API_BASE_URL = "http://localhost:8080/api/v1/patients";

class patientService {

    getpatients(){
        return axios.get(patient_API_BASE_URL);
    }

    createpatient(patient){
        return axios.post(patient_API_BASE_URL, patient);
    }

    getpatientById(patientId){
        return axios.get(patient_API_BASE_URL + '/' + patientId);
    }

    updatepatient(patient, patientId){
        return axios.put(patient_API_BASE_URL + '/' + patientId, patient);
    }

    deletepatient(patientId){
        return axios.delete(patient_API_BASE_URL + '/' + patientId);
    }
}

export default new patientService()