import { fetchSubjects } from '../../api/subjects.js'
import CreateSubjectForm from './components/CreateSubjectForm'
import Modal from '../../shared/Modal'
import PageTitle from '../../shared/PageTitle'
import SubjectsTable from './components/SubjectsTable'
import styles from '../pages.module.css'
import { ui } from '../../utils/dom'

export default async function SubjectsPage() {
  const subjects = await fetchSubjects()
  const showModalCreateSubject = () => ui.openModal('createSubject')

  return (
    <>
      <div class={`content ${styles.crudPage}`}>
        <div class={styles.crudHeader}>
          <PageTitle title="Предметы" />
          <button
            class={styles.addButton}
            onClick={showModalCreateSubject}
          >
            Добавить предмет
          </button>
        </div>
        <SubjectsTable subjects={subjects} />
      </div>
      <Modal modalId="createSubject">
        <CreateSubjectForm closeId="createSubject" />
      </Modal>
    </>
  )
}
