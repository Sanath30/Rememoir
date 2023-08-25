const express = require('express');
const router = express.Router();
const {
  createPsychiatrist,
  getAllPsychiatrists,
  getPsychiatristById,
  updatePsychiatrist,
  deletePsychiatrist
} = require('../controllers/psychiatristController');
const Psychiatrist = require('../models/psychiatrist');

router.post('/', createPsychiatrist);
router.get('/', getAllPsychiatrists);
router.get('/:id', getPsychiatristById);
router.put('/:id', updatePsychiatrist);
router.delete('/:id', deletePsychiatrist);

module.exports = router;
