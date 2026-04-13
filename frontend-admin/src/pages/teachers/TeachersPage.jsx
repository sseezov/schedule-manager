import { fetchTeachers } from '../../api/teachers'
import CreateTeacherForm from './components/CreateTeacherForm'
import { handlers, registerClick } from '../../core/handlers'
import Modal from '../../components/shared/Modal'
import PageTitle from '../../components/shared/PageTitle'
import TeachersTable from './components/TeachersTable'

export default async function TeachersPage() {
  const teachers = await fetchTeachers()
  const showModalCreateTeacher = () => handlers.openModal('createTeacher')
  const idCreate = registerClick(showModalCreateTeacher)

  return (
    <div>
      <PageTitle title="Преподаватели" />
      <TeachersTable teachers={teachers} />
      <button data-id={idCreate}>Добавить преподавателя</button>
      <Modal modalId="createTeacher">
        <CreateTeacherForm closeId="createTeacher" />
      </Modal>
    </div>
  )
}