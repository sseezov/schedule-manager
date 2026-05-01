import { deleteSubject } from "../../../api/subjects";
import ConfirmForm from "../../../shared/ConfirmForm";
import Modal from "../../../shared/Modal";
import { render } from "../../../core/render";
import SubjectsPage from "../SubjectsPage";
import styles from "./SubjectsTable.module.css"
import UpdateSubjectForm from "./UpdateSubjectForm";
import { ui } from "../../../utils/dom";

export default function SubjectsTable({ subjects }) {
  let subjectToDelete;
  let subjectToUpdate = {};
  
  const onConfirm = async () => {
    const result = await deleteSubject(subjectToDelete)
    ui.closeModal()
    ui.showFlashMessage(result)
    subjectToDelete = null
    render('#main', <SubjectsPage />)
  }

  const showModalUpdateSubject = (subjectId) => {
    subjectToUpdate = subjects.find((subject) => subject.id === subjectId)
    render('#updateSubject-content', <UpdateSubjectForm closeId="updateSubject" subject={subjectToUpdate} />)
    ui.openModal('updateSubject')
  }
  
  const showModalDeleteSubject = (subjectId) => {
    subjectToDelete = subjectId
    ui.openModal('deleteSubject')
  }

  return (
    <>
      <table class={styles.table}>
        <thead>
          <tr>
            <th>Предмет</th>
            <th>Сокращение</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {subjects.map(subject => (
            <tr key={subject.id}>
              <td>{subject.name}</td>
              <td>{subject.abbreviation || subject.abbr}</td>
              <td><button onClick={() => showModalUpdateSubject(subject.id)}>Редактировать</button></td>
              <td><button onClick={() => showModalDeleteSubject(subject.id)}>Удалить</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal modalId="updateSubject">
        <UpdateSubjectForm closeId="updateSubject" subject={subjectToUpdate} />
      </Modal>
      <Modal modalId="deleteSubject">
        <ConfirmForm message="Подтвердите удаление предмета" onConfirm={onConfirm} />
      </Modal>
    </>
  )
}