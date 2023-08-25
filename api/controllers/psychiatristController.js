const asyncHandler = require('express-async-handler');
const Psychiatrist = require('../models/psychiatrist');

const createPsychiatrist = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    birthDate,
    gender,
    contact
  } = req.body;

  const newPsychiatrist = await Psychiatrist.create({
    firstName,
    lastName,
    birthDate,
    gender,
    contact
  });

  res.status(201).json(newPsychiatrist);
});

const getAllPsychiatrists = asyncHandler(async (req, res) => {
  const psychiatrists = await Psychiatrist.find();
  res.status(200).json(psychiatrists);
});

const getPsychiatristById = asyncHandler(async (req, res) => {
  const psychiatristId = req.params.id;
  const psychiatrist = await Psychiatrist.findById(psychiatristId);
  if (!psychiatrist) {
    return res.status(404).json({ message: 'Psychiatrist not found' });
  }
  res.status(200).json(psychiatrist);
});

const updatePsychiatrist = asyncHandler(async (req, res) => {
  const psychiatristId = req.params.id;
  const updatedPsychiatrist = await Psychiatrist.findByIdAndUpdate(psychiatristId, req.body, {
    new: true
  });
  if (!updatedPsychiatrist) {
    return res.status(404).json({ message: 'Psychiatrist not found' });
  }
  res.status(200).json(updatedPsychiatrist);
});

const deletePsychiatrist = asyncHandler(async (req, res) => {
  const psychiatristId = req.params.id;
  const deletedPsychiatrist = await Psychiatrist.findByIdAndDelete(psychiatristId);
  if (!deletedPsychiatrist) {
    return res.status(404).json({ message: 'Psychiatrist not found' });
  }
  res.status(200).json({ message: 'Psychiatrist deleted successfully' });
});

module.exports = {
  createPsychiatrist,
  getAllPsychiatrists,
  getPsychiatristById,
  updatePsychiatrist,
  deletePsychiatrist
};
