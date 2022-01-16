const Student = require('./schemas/students');

const createStudent = async (obj) => {
  const student = new Student({
    name: obj.name,
    surname: obj.surname,
    gender: obj.gender,
    age: obj.age,
    birthDate: obj.birthDate,
    // health: {
    //   blood: obj.adress,
    //   resus: obj.resus,
    //   width: obj.width,
    //   weight: obj.weight,
    // },
    family: {
      father: {
        name: obj.name,
        surname: obj.surname,
        number: obj.number,
      },
      mother: {
        name: obj.name,
        surname: obj.surname,
        number: obj.number,
      },
    },
    adress: obj.adress,
    // class: obj.adress,
    education: {
      name: obj.name,
      marks: obj.marks,
    },
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
  return student[0];
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
      health: {
        blood: data.adress,
        resus: data.resus,
        width: data.width,
        weight: data.weight,
      },
      family: {
        father: {
          name: data.name,
          surname: data.surname,
          number: data.number,
        },
        mother: {
          name: data.name,
          surname: data.surname,
          number: data.number,
        },
      },
      adress: data.adress,
      class: data.adress,
      education: {
        name: data.name,
        marks: data.marks,
      },
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

