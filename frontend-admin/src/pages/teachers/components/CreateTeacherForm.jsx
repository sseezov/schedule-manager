import styles from './TeacherForm.module.css'
import { handlers } from '../../../core/handlers'
import { createTeacher } from '../../../api/teachers'
import render from '../../../core/render'
import TeachersPage from '../TeachersPage'

export default function CreateTeacherForm({ closeId }) {
  const onSubmit = async (e) => {
    const formData = new FormData(e.target)
    const data = {
      fio: formData.get('fio'),
      abbr: formData.get('abbr'),
      position: formData.get('position'),
    }
    const result = await createTeacher(data)
    handlers.closeModal(closeId)
    handlers.showFlashMessage(result)
    render('#main', <TeachersPage />)
  }

  return (
    <form class={styles.modal} onSubmit={onSubmit}>
      <h3>Добавить преподавателя</h3>
      <input type="text" name="fio" placeholder="ФИО" required />
      <input type="text" name="abbr" placeholder="Сокращение" required />
      <input type="text" name="position" placeholder="Должность" />
      <button type="submit">Добавить</button>
    </form>
  )
}