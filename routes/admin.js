const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const { createStudent, getAllStudents, deleteStudentById } = require('../model/students')

router.get('/', async (req, res) => {
  const studentGet = await getAllStudents();
  const studentsListHTML = studentGet.map(({id, name, surname, gender, birthDate}) => 
  `<table>
    <tr>
      <td>
        <div class="user">
          <div class="name">
          ${name} ${surname} <span class="gender">${gender} </span> 
          </div> 
          <div class="birdthDate">
            ${birthDate}<br>\n
          </div>
          <div class="create">
            <a href="http://127.0.0.1:3000/admin/${id}" class="btn btn3">Изменить</a>
          </div>
          <div>
            <a href="admin/delete/${id}"><div class="delete"></div></a>
          </div>
        </div> 
      </td>
    </tr>
  </table>`).join('');
  res.render('admin', { studentsListHTML: studentsListHTML });
});

router.get('/delete/:id', async (req, res, next) => {
  await deleteStudentById(req.params.id);
  res.redirect(`http://127.0.0.1:3000/admin`);
});

router.get('/create', async (req, res, next) => {
  res.render('create')
});

router.post('/create', upload.none(), async (req, res, next) => {
  await createStudent(req.body)
  res.send(`Hello ${req.body.name}`)
});

module.exports = router;