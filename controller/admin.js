const { createStudent, getAllStudents, deleteStudentById, getStudentById, updateStudentById } = require('../model/students')

const adminStudents = {
  getAllStudents: async () => {
    const students = await getAllStudents();
    const studentsListHTML = students.map(({id, name, surname, gender, birthDate}) => 
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
              <a href="/admin/${id}" class="btn btn3">Изменить</a>
            </div>
            <div>
              <a href="admin/delete/${id}"><div class="delete"></div></a>
            </div>
          </div> 
        </td>
      </tr>
    </table>`).join('');
    return studentsListHTML;
  },
  deleteStudent: async (req) => {
    await deleteStudentById(req.params.id);
  },
  createStudent: async (obj) => {
    await createStudent(obj);
  },
  getStudentById: async (id) => {
    return await getStudentById(id);
  },
  updateStudentById: async (obj) => {
    await updateStudentById(obj);
  }
}

module.exports = adminStudents;