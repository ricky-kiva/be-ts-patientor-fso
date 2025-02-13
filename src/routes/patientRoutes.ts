import express, { Response } from 'express';
import patientServices from '../services/patientServices';
import { NewPatient, PatientWithoutSSN } from '../types';
import toNewPatient from '../utils';

const patientRouter = express.Router();

patientRouter.get('/', (_req, res: Response<PatientWithoutSSN[]>) => {
  res.send(patientServices.getPatientsWithoutSSN());
});

patientRouter.post('/', (req, res) => {
  let newPatient: NewPatient;

  try {
    newPatient = toNewPatient(req.body);
  } catch(e: unknown) {
    res.status(400).json({
      error: e instanceof Error 
        ? e.message
        : 'Invalid input'
    });
    
    return;
  }

  const addedPatient = patientServices.addPatient(newPatient);

  res.json(addedPatient);
});

export default patientRouter;
