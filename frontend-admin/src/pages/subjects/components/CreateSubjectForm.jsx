import styles from './SubjectForm.module.css'
import { createSubject } from '../../../api/subjects'
import { render } from '../../../core/render'
import SubjectsPage from '../SubjectsPage'
import { ui } from '../../../utils/dom'

export default function CreateSubjectForm({ closeId }) {
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      abbreviation: formData.get('abbreviation'),
    }
    const result = await createSubject(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <SubjectsPage />)
  }

  return (
    <form class={styles.modal} onSubmit={onSubmit}>
      <h3>Добавить предмет</h3>
      <input type="text" name="name" placeholder="Название предмета" required />
      <input type="text" name="abbreviation" placeholder="Сокращение" required />
      <button type="submit">Добавить</button>
    </form>
  )
}