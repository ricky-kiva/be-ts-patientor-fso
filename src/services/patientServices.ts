import patients from "../../data/patients";
import { NewPatient, Patient, PatientWithoutSSN } from "../types";
import { v1 as uuid } from 'uuid';

const getPatients = (): Patient[] => patients;

const getPatientsWithoutSSN = (): PatientWithoutSSN[] => patients.map(
  (p) => ({ 
    id: p.id,
    name: p.name,
    dateOfBirth: p.dateOfBirth,
    gender: p.gender,
    occupation: p.occupation
   })
);

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...patient
  };

  patients.push(newPatient);
  
  return newPatient;
};

export default {
  getPatients,
  getPatientsWithoutSSN,
  addPatient
};
