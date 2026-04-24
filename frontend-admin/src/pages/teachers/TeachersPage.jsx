import { fetchTeachers } from '../../api/teachers'
import CreateTeacherForm from './components/CreateTeacherForm'
import { handlers } from '../../core/handlers'
import Modal from '../../components/shared/Modal'
import PageTitle from '../../components/shared/PageTitle'
import TeachersTable from './components/TeachersTable'

export default async function TeachersPage() {
  const teachers = await fetchTeachers()
  const showModalCreateTeacher = () => handlers.openModal('createTeacher')

  return (
    <>
      <PageTitle title="Преподаватели" />
      <TeachersTable teachers={teachers} />
      <button onClick={showModalCreateTeacher}>Добавить преподавателя</button>
      <Modal modalId="createTeacher">
        <CreateTeacherForm closeId="createTeacher" />
      </Modal>
    </>
  )
}