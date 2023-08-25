const asyncHandler = require('express-async-handler');
const Doctor = require('../models/doctor');

const createDoctor = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    birthDate,
    gender,
    contact
  } = req.body;

  const newDoctor = await Doctor.create({
    firstName,
    lastName,
    birthDate,
    gender,
    contact
  });

  res.status(201).json(newDoctor);
});

const getAllDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find();
  res.status(200).json(doctors);
});

const getDoctorById = asyncHandler(async (req, res) => {
  const doctorId = req.params.id;
  const doctor = await Doctor.findById(doctorId);
  if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found' });
  }
  res.status(200).json(doctor);
});

const updateDoctor = asyncHandler(async (req, res) => {
  const doctorId = req.params.id;
  const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, req.body, {
    new: true
  });
  if (!updatedDoctor) {
    return res.status(404).json({ message: 'Doctor not found' });
  }
  res.status(200).json(updatedDoctor);
});

const deleteDoctor = asyncHandler(async (req, res) => {
  const doctorId = req.params.id;
  const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);
  if (!deletedDoctor) {
    return res.status(404).json({ message: 'Doctor not found' });
  }
  res.status(200).json({ message: 'Doctor deleted successfully' });
});

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
};
