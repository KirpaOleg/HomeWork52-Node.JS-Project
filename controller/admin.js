const { createStudent, getAllStudents, deleteStudentById } = require('../model/students')

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
              <a href="http://127.0.0.1:3000/admin/${id}" class="btn btn3">Изменить</a>
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
  }
}

module.exports = adminStudents;