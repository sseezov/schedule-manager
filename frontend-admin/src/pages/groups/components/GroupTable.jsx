import { deleteTeacher } from "../../../api/teachers";
import ConfirmForm from "../../../components/shared/ConfirmForm";
import Modal from "../../../components/shared/Modal";
import { handlers, registerClick } from "../../../core/handlers"
import render from "../../../core/render";
import GroupsPage from "../GroupsPage";
import styles from "./GroupsTable.module.css"
import UpdateGroupForm from "./UpdateGroupForm";



export default function GroupsTable({ groups }) {
  console.log(groups);
  let teacher = {};
  const onConfirm = async () => {
    const confirmForm = document.querySelector('#confirmForm')
    const teacherId = confirmForm.dataset.teacherid
    const result = await deleteTeacher(teacherId)
    handlers.closeModal('deleteTeacher')
    handlers.showFlashMessage(result)
    render('#main', <GroupsPage />)
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

  const idUpdate = registerClick(showModalUpdateTeacher)
  const idDelete = registerClick(showModalDeleteTeacher)

  return (
    <div>
      <table class={styles.table}>
        <thead>
          <tr>
            <th>Группа</th>
            <th>Год поступления</th>
            <th>Сокращение</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {groups.map(group => (
            <tr>
              <td>{group.name}</td>
              <td>{group.year_of_admission}</td>
              <td>{group.abbreviation}</td>
              <td><button groupId={group.id} data-id={idUpdate}>Редактировать</button></td>
              <td><button groupId={group.id} data-id={idDelete}>Удалить</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal modalId="updateTeacher">
        <UpdateGroupForm closeId="updateTeacher" teacher={teacher} />
      </Modal>
      <Modal modalId="deleteTeacher">
        <ConfirmForm message="Подтвердите удаление преподавателя" onConfirm={onConfirm} onCancel={onCancel} />
      </Modal>
    </div>
  )
}
