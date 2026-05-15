import { deleteSubject, fetchSubjects } from '../../api/subjects.js'
import { render } from '../../core/render'
import CreateSubjectForm from './components/CreateSubjectForm'
import UpdateSubjectForm from './components/UpdateSubjectForm'
import Modal from '../../shared/Modal'
import ConfirmForm from '../../shared/ConfirmForm'
import PageHeader from '../shared/PageHeader'
import SubjectsTable from './components/SubjectsTable'
import styles from '../pages.module.css'
import { ui } from '../../utils/dom'
import { filterByQuery } from '../../utils/search.js';

export default async function SubjectsPage() {
  const subjects = await fetchSubjects()
  const showModalCreateSubject = () => ui.openModal('createSubject')

  const openUpdateSubjectModal = (subject) => {
    render('#updateSubjectContent', <UpdateSubjectForm closeId="updateSubject" subject={subject} />)
    ui.openModal('updateSubject')
  }

  const handleDeleteSubject = async (subjectId) => {
    const result = await deleteSubject(subjectId)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <SubjectsPage />)
  }

  const openDeleteSubjectModal = (subject) => {
    render(
      '#deleteSubjectContent',
      <ConfirmForm
        message="Подтвердите удаление предмета"
        onConfirm={() => handleDeleteSubject(subject.id)}
      />
    )
    ui.openModal('deleteSubject')
  }

  const handleSearch = (query) => {
    const filteredSubjects = query ? filterByQuery(subjects, query) : subjects
    render(
      '#subjectsTable',
      <SubjectsTable
        subjects={filteredSubjects}
        onEdit={openUpdateSubjectModal}
        onDelete={openDeleteSubjectModal}
      />
    )
  }

  return (
    <>
      <div class={`content ${styles.crudPage}`}>
        <PageHeader
          title="Предметы"
          buttonText="Добавить предмет"
          onAdd={showModalCreateSubject}
          searchPlaceholder="Поиск по предметам"
          onSearch={handleSearch}
        />
        <div id="subjectsTable">
          <SubjectsTable
            subjects={subjects}
            onEdit={openUpdateSubjectModal}
            onDelete={openDeleteSubjectModal}
          />
        </div>
      </div>
      <Modal modalId="createSubject">
        <CreateSubjectForm closeId="createSubject" />
      </Modal>
      <Modal modalId="updateSubject" />
      <Modal modalId="deleteSubject" />
    </>
  )
}
