import { deleteTeacher } from "../../../api/teachers";
import ConfirmForm from "../../../components/shared/ConfirmForm";
import Modal from "../../../components/shared/Modal";
import { handlers } from "../../../core/handlers"
import render from "../../../core/render";
import TeachersPage from "../TeachersPage";
import styles from "./TeachersTable.module.css"
import UpdateTeacherForm from "./UpdateTeacherForm";

export default function TeachersTable({ teachers }) {
  let teacher = {};
  const onConfirm = async () => {
    const confirmForm = document.querySelector('#confirmForm')
    const teacherId = confirmForm.dataset.teacherid
    const result = await deleteTeacher(teacherId)
    handlers.closeModal('deleteTeacher')
    handlers.showFlashMessage(result)
    render('#main', <TeachersPage />)
  }
  const onCancel = () => handlers.closeModal('deleteTeacher')
  const showModalUpdateTeacher = (e) => {
    const updateTeacherForm = document.querySelector('#updateTeacherForm')
    const teacherid = e.target.attributes.getNamedItem('teacherid').value
    teacher = teachers.find((teacher) => teacher.id === +teacherid)
    updateTeacherForm.dataset.teacherid = teacherid
    render('#updateTeacher-content', <UpdateTeacherForm closeId="updateTeacher" teacher={teacher} />)
    handlers.openModal('updateTeacher')
  }
  const showModalDeleteTeacher = (e) => {
    const confirmForm = document.querySelector('#confirmForm')
    const teacherid = e.target.attributes.getNamedItem('teacherid').value
    confirmForm.dataset.teacherid = teacherid
    handlers.openModal('deleteTeacher')
  }

  return (
    <div>
      <table class={styles.table}>
        <thead>
          <tr>
            <th>Преподаватель</th>
            <th>Сокращение</th>
            <th>Должность</th>
            <th>Цвет</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr>
              <td>{teacher.name}</td>
              <td>{teacher.fio}</td>
              <td>{teacher.position}</td>
              <td>{teacher.color}</td>
              <td><button teacherId={teacher.id} onClick={showModalUpdateTeacher}>Редактировать</button></td>
              <td><button teacherId={teacher.id} onClick={showModalDeleteTeacher}>Удалить</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal modalId="updateTeacher">
        <UpdateTeacherForm closeId="updateTeacher" teacher={teacher} />
      </Modal>
      <Modal modalId="deleteTeacher">
        <ConfirmForm message="Подтвердите удаление преподавателя" onConfirm={onConfirm} onCancel={onCancel} />
      </Modal>
    </div>
  )
}
