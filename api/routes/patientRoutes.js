const express = require('express');
const router = express.Router();
const {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient
} = require('../controllers/patientController');
const Patient = require('../models/patient');

router.post('/', createPatient);
router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

module.exports = router;
