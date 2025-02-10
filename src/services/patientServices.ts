import patients from "../../data/patients";
import { Patient, PatientWithoutSSN } from "../types";

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

export default {
  getPatients,
  getPatientsWithoutSSN
};
