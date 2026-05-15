import { deleteClass, fetchClasses } from '../../api/classes'
import { render } from '../../core/render'
import CreateClassForm from './components/CreateClassForm'
import UpdateClassForm from './components/UpdateClassForm'
import Modal from '../../shared/Modal'
import ConfirmForm from '../../shared/ConfirmForm'
import PageHeader from '../shared/PageHeader'
import ClassesTable from './components/ClassesTable'
import styles from '../pages.module.css'
import { ui } from '../../utils/dom'
import { filterByQuery } from '../../utils/search';

export default async function ClassesPage() {
  const classes = await fetchClasses()
  const showModalCreateClass = () => ui.openModal('createClass')

  const openUpdateClassModal = (classItem) => {
    render('#updateClassContent', <UpdateClassForm closeId="updateClass" classItem={classItem} />)
    ui.openModal('updateClass')
  }

  const handleDeleteClass = async (classId) => {
    const result = await deleteClass(classId)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <ClassesPage />)
  }

  const openDeleteClassModal = (classItem) => {
    render(
      '#deleteClassContent',
      <ConfirmForm
        message="Подтвердите удаление аудитории"
        onConfirm={() => handleDeleteClass(classItem.id)}
      />
    )
    ui.openModal('deleteClass')
  }

  const handleSearch = (query) => {
    const filteredClasses = query ? filterByQuery(classes, query) : classes
    render(
      '#classesTable',
      <ClassesTable
        classes={filteredClasses}
        onEdit={openUpdateClassModal}
        onDelete={openDeleteClassModal}
      />
    )
  }

  return (
    <>
      <div class={`content ${styles.crudPage}`}>
        <PageHeader
          title="Аудитории"
          buttonText="Добавить аудиторию"
          onAdd={showModalCreateClass}
          searchPlaceholder="Поиск по аудиториям"
          onSearch={handleSearch}
        />
        <div id="classesTable">
          <ClassesTable
            classes={classes}
            onEdit={openUpdateClassModal}
            onDelete={openDeleteClassModal}
          />
        </div>
        <Modal modalId="createClass">
          <CreateClassForm closeId="createClass" />
        </Modal>
        <Modal modalId="updateClass" />
        <Modal modalId="deleteClass" />
      </div>
    </>
  )
}
