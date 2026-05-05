import ConfirmForm from "../../../shared/ConfirmForm";
import Modal from "../../../shared/Modal";
import { render } from "../../../core/render";
import ClassesPage from "../ClassesPage";
import styles from "../../pages.module.css"
import UpdateClassForm from "./UpdateClassForm";
import { deleteClass } from "../../../api/classes";
import { ui } from "../../../utils/dom";

export default function ClassesTable({ classes }) {
  let classToDelete;
  let classToUpdate = {};

  const onConfirm = async () => {
    const result = await deleteClass(classToDelete)
    ui.closeModal()
    ui.showFlashMessage(result)
    classToDelete = null
    render('#main', <ClassesPage />)
  }
  const showModalUpdateClass = (classId) => {
    classToUpdate = classes.find(classItem => classItem.id === classId)
    render('#updateClass-content', <UpdateClassForm closeId="updateClass" classItem={classToUpdate} />)
    ui.openModal('updateClass')
  }
  const showModalDeleteClass = (classId) => {
    classToDelete = classId
    ui.openModal('deleteClass')
  }

  return (
    <div>
      <table class={styles.table}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Сокращение</th>
            <th>Количество мест</th>
            <th>Корпус</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {classes.map(classItem => (
            <tr>
              <td>{classItem.name}</td>
              <td>{classItem.abbreviation}</td>
              <td>{classItem.capacity}</td>
              <td>{classItem.building}</td>
              <td><button class={`${styles.tableActionButton} ${styles.tableEditButton}`} classId={classItem.id} onClick={() => showModalUpdateClass(classItem.id)}>Редактировать</button></td>
              <td><button class={`${styles.tableActionButton} ${styles.tableDeleteButton}`} classId={classItem.id} onClick={() => showModalDeleteClass(classItem.id)}>Удалить</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal modalId="updateClass">
        <UpdateClassForm classItem={classToUpdate} />
      </Modal>
      <Modal modalId="deleteClass">
        <ConfirmForm message="Подтвердите удаление аудитории" onConfirm={onConfirm} />
      </Modal>
    </div>
  )
}
