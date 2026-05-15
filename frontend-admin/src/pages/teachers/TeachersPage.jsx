import { deleteTeacher, fetchTeachers } from '../../api/teachers'
import { render } from '../../core/render'
import CreateTeacherForm from './components/CreateTeacherForm'
import UpdateTeacherForm from './components/UpdateTeacherForm'
import Modal from '../../shared/Modal'
import ConfirmForm from '../../shared/ConfirmForm'
import PageHeader from '../shared/PageHeader'
import TeachersTable from './components/TeachersTable'
import Sidebar from '../../shared/Sidebar'
import styles from '../pages.module.css'
import { ui } from '../../utils/dom'
import { filterByQuery } from '../../utils/search';

export default async function TeachersPage() {
  const teachers = await fetchTeachers()
  const showModalCreateTeacher = () => ui.openModal('createTeacher')

  const openUpdateTeacherModal = (teacher) => {
    render('#updateTeacherContent', <UpdateTeacherForm closeId="updateTeacher" teacher={teacher} />)
    ui.openModal('updateTeacher')
  }

  const handleDeleteTeacher = async (teacherId) => {
    const result = await deleteTeacher(teacherId)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <TeachersPage />)
  }

  const openDeleteTeacherModal = (teacher) => {
    render(
      '#deleteTeacherContent',
      <ConfirmForm
        message="Подтвердите удаление преподавателя"
        onConfirm={() => handleDeleteTeacher(teacher.id)}
      />
    )
    ui.openModal('deleteTeacher')
  }

  const handleSearch = (query) => {
    const filteredTeachers = query ? filterByQuery(teachers, query) : teachers
    render(
      '#teachersTable',
      <TeachersTable
        teachers={filteredTeachers}
        onEdit={openUpdateTeacherModal}
        onDelete={openDeleteTeacherModal}
      />
    )
  }

  return (
    <>
      <div class={`content ${styles.crudPage}`}>
        <PageHeader
          title="Преподаватели"
          buttonText="Добавить преподавателя"
          onAdd={showModalCreateTeacher}
          searchPlaceholder="Поиск по преподавателям"
          onSearch={handleSearch}
        />
        <div id="teachersTable">
          <TeachersTable
            teachers={teachers}
            onEdit={openUpdateTeacherModal}
            onDelete={openDeleteTeacherModal}
          />
        </div>
      </div>
      <Modal modalId="createTeacher">
        <CreateTeacherForm closeId="createTeacher" />
      </Modal>
      <Modal modalId="updateTeacher" />
      <Modal modalId="deleteTeacher" />
    </>
  )
}
