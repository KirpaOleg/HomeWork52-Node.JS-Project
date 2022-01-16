const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const adminStudents = require('../controller/admin')

router.get('/', async (req, res) => {
  const studentsListHTML = await adminStudents.getAllStudents();
  res.render('admin', { studentsListHTML: studentsListHTML });
});

router.get('/delete/:id', async (req, res, next) => {
  await adminStudents.deleteStudent(req);
  res.redirect(`/admin`);
});

router.get('/create', async (req, res, next) => {
  res.render('create')
});

router.post('/create', upload.none(), async (req, res, next) => {
  await adminStudents.createStudent(req.body);
  res.send(`Hello ${req.body.name}`);
});

router.get('/:id', async (req, res, next) => {
  const student = await adminStudents.getStudentById(req.params.id);
  res.render('update', {student: student})
});

router.post('/:id', upload.none(), async (req, res, next) => {
  await adminStudents.updateStudentById(req.body);
  res.send('update is ok')
});

module.exports = router;