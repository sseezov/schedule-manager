import { deleteTeacher } from "../../../api/teachers";
import ConfirmForm from "../../../components/shared/ConfirmForm";
import Modal from "../../../components/shared/Modal";
import { handlers } from "../../../core/handlers"
import render from "../../../core/render";
import GroupsPage from "../GroupsPage";
import styles from "./GroupsTable.module.css"
import UpdateGroupForm from "./UpdateGroupForm";

export default function GroupsTable({ groups }) {
  console.log(groups);
  let teacher = {};
  const onConfirm = async () => {
  }
  const onCancel = () => handlers.closeModal('deleteTeacher')
  const showModalUpdateGroup = (e) => {
  }
  const showModalDeleteGroup = (e) => {
  }

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
              <td><button groupId={group.id} onClick={showModalUpdateGroup}>Редактировать</button></td>
              <td><button groupId={group.id} onClick={showModalDeleteGroup}>Удалить</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal modalId="updateGroup">
        <UpdateGroupForm closeId="updateGroup" teacher={teacher} />
      </Modal>
      <Modal modalId="deleteGroup">
        <ConfirmForm message="Подтвердите удаление группы" onConfirm={onConfirm} onCancel={onCancel} />
      </Modal>
    </div>
  )
}
