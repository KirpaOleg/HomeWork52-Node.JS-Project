const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const medcardStudents = require('../controller/medcard')

router.get('/', async (req, res) => {
  const studentsListHTML = await medcardStudents.getAllStudents();
  res.render('medcard', { studentsListHTML: studentsListHTML });
});

router.get('/:id', async (req, res, next) => {
  const student = await medcardStudents.getStudentById(req.params.id);
  res.render('updatemed', {student: student})
});

router.post('/:id', upload.none(), async (req, res, next) => {
  await medcardStudents.updateStudentById(req.body);
  res.send('update is ok')
});

module.exports = router;