const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const { createStudent } = require('../model/students')

const data = {
  name: "Valera",
  gender: "Male",
  birdthDate: "19.03.2015",
  adress: "Киев, проспект Победы 19, кв.3",
}

router.get('/', async (req, res) => {
  const user = await createStudent(data);
  res.send('Win win')
});

module.exports = router;