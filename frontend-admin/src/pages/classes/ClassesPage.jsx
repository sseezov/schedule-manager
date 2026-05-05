import { fetchClasses } from '../../api/classes'
import CreateClassForm from './components/CreateClassForm'
import Modal from '../../shared/Modal'
import PageTitle from '../../shared/PageTitle'
import ClassesTable from './components/ClassesTable'
import styles from '../pages.module.css'
import { ui } from '../../utils/dom'

export default async function ClassesPage() {
  const classes = await fetchClasses()
  const showModalCreateClass = () => ui.openModal('createClass')

  return (
    <>
      <div class={`content ${styles.crudPage}`}>
        <div class={styles.crudHeader}>
          <PageTitle title="Аудитории" />
          <button class={styles.addButton} onClick={showModalCreateClass}>Добавить аудиторию</button>
        </div>
        <ClassesTable classes={classes || []} />
        <Modal modalId="createClass">
          <CreateClassForm closeId="createClass" />
        </Modal>
      </div>
    </>
  )
}
