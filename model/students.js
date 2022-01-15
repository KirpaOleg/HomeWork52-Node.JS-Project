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

const getStudentById = async (id) => {
  const student = await Student.find({_id: id});
}

const updateStudentById = async(data) => {
  await Student.findOneAndUpdate(
    {_id: data.id},
    {
      name: data.name,
      surname: data.surname,
      gender: data.gender,
      age: data.age,
      birthDate: data.birthDate,
      adress: data.adress,
    }
  ) 
 }

module.exports = {
  createStudent,
  getAllStudents,
  deleteStudentById,
  getStudentById,
  updateStudentById,
}

