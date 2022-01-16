const { getAllStudents, getStudentById, updateStudentById } = require('../model/students')

const medcardStudents = {
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
              <a href="/medcard/${id}" class="btn btn3">Изменить</a>
            </div>
          </div> 
        </td>
      </tr>
    </table>`).join('');
    return studentsListHTML;
  },

  getStudentById: async (id) => {
    return await getStudentById(id);
  },
  updateStudentById: async (obj) => {
    await updateStudentById(obj);
  }
}

module.exports = medcardStudents;