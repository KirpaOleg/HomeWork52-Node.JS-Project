const Student = require('./schemas/students');

const createStudent = async (obj) => {
  const student = new Student({
    name: obj.name,
    surname: obj.surname,
    gender: obj.gender,
    age: obj.age,
    birthDate: obj.birthDate,
    adress: obj.adress,
  });
  try {
    await student.save();
  } catch (err) {
    console.log(err)
  };
}

const getAllStudents = async () => {
  const student = await Student.find({});
  return student; 
}

const deleteStudentById = async(id) => {
  await Student.deleteOne({_id: id});
}

module.exports = {
  createStudent,
  getAllStudents,
  deleteStudentById,
}

