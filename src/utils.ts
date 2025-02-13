import { Gender, NewPatient } from "./types";

const toNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if ('name' in object 
    && 'dateOfBirth' in object 
    && 'ssn' in object 
    && 'gender' in object 
    && 'occupation' in object) {
    const newPatient: NewPatient = {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSSN(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation)
    };

    return newPatient;
  }

  throw new Error('Incorrect data: required fields are missing');
};

export default toNewPatient;

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('incorrect or missing name');
  }

  return name;
};

const parseDateOfBirth = (dob: unknown): string => {
  if (!dob || !isString(dob) || !isDate(dob)) {
    throw new Error(`incorrect or missing date of birth: ${dob}`);
  }

  return dob;
};

const parseSSN = (ssn: unknown): string => {
  if (!ssn || !isString(ssn) || !isSSN(ssn)) {
    throw new Error(`incorrect or missing SSN: ${ssn}`);
  }

  return ssn;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender: ${gender}`);
  }

  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error(`Incorrect or missing occupation`);
  }

  return occupation;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isSSN = (ssn: string): boolean => {
  const finnishSSNRegex = /^\d{6}[-A+]\d{2,4}[A-Z]?$/;
  return finnishSSNRegex.test(ssn);
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(v => v.toString()).includes(param);
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};
