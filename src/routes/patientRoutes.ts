import express, { Response } from 'express';
import patientServices from '../services/patientServices';
import { PatientWithoutSSN } from '../types';

const patientRouter = express.Router();

patientRouter.get('/', (_req, res: Response<PatientWithoutSSN[]>) => {
  res.send(patientServices.getPatientsWithoutSSN());
});

export default patientRouter;
