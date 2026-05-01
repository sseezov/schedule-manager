import { fetchSubjects } from '../../api/subjects.js'
import CreateSubjectForm from './components/CreateSubjectForm'
import Modal from '../../shared/Modal'
import PageTitle from '../../shared/PageTitle'
import SubjectsTable from './components/SubjectsTable'
import styles from './SubjectsPage.module.css'
import { ui } from '../../utils/dom'

export default async function SubjectsPage() {
  const subjects = await fetchSubjects()
  const showModalCreateSubject = () => ui.openModal('createSubject')

  return (
    <>
      <div class='content'>
        <PageTitle title="Предметы" />
        <SubjectsTable subjects={subjects} />
        <button
          class={styles.addButton}
          onClick={showModalCreateSubject}
        >
          + Добавить предмет
        </button>
      </div>
      <Modal modalId="createSubject">
        <CreateSubjectForm closeId="createSubject" />
      </Modal>
    </>
  )
}