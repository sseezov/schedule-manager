import { fetchTeachers } from '../../api/teachers'
import CreateTeacherForm from './components/CreateTeacherForm'
import Modal from '../../shared/Modal'
import PageTitle from '../../shared/PageTitle'
import TeachersTable from './components/TeachersTable'
import Sidebar from '../../shared/Sidebar'
import styles from '../pages.module.css'
import { ui } from '../../utils/dom'

export default async function TeachersPage() {
  const teachers = await fetchTeachers()
  const showModalCreateTeacher = () => ui.openModal('createTeacher')

  return (
    <>
      <div class={`content ${styles.crudPage}`}>
        <div class={styles.crudHeader}>
          <PageTitle title="Преподаватели" />
          <button
            class={styles.addButton}
            onClick={showModalCreateTeacher}
          >
            Добавить преподавателя
          </button>
        </div>
        <TeachersTable teachers={teachers} />
      </div>
      <Modal modalId="createTeacher">
        <CreateTeacherForm closeId="createTeacher" />
      </Modal>
    </>
  )
}
