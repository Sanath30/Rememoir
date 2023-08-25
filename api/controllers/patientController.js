const asyncHandler = require('express-async-handler');
const Patient = require('../models/patient');

const createPatient = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    birthDate,
    gender,
    contact,
    doctor,
    psychiatrist
  } = req.body;

  const newPatient = await Patient.create({
    firstName,
    lastName,
    birthDate,
    gender,
    contact,
    doctor,
    psychiatrist
  });

  res.status(201).json(newPatient);
});

const getAllPatients = asyncHandler(async (req, res) => {
  const patients = await Patient.find();
  res.status(200).json(patients);
});

const getPatientById = asyncHandler(async (req, res) => {
  const patientId = req.params.id;
  const patient = await Patient.findById(patientId);
  if (!patient) {
    return res.status(404).json({ message: 'Patient not found' });
  }
  res.status(200).json(patient);
});

const updatePatient = asyncHandler(async (req, res) => {
  const patientId = req.params.id;
  const updatedPatient = await Patient.findByIdAndUpdate(patientId, req.body, {
    new: true
  });
  if (!updatedPatient) {
    return res.status(404).json({ message: 'Patient not found' });
  }
  res.status(200).json(updatedPatient);
});

const deletePatient = asyncHandler(async (req, res) => {
  const patientId = req.params.id;
  const deletedPatient = await Patient.findByIdAndDelete(patientId);
  if (!deletedPatient) {
    return res.status(404).json({ message: 'Patient not found' });
  }
  res.status(200).json({ message: 'Patient deleted successfully' });
});

module.exports = {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient
};
