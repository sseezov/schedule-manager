import styles from './SubjectForm.module.css'
import { updateSubject } from '../../../api/subjects'
import { render } from '../../../core/render'
import SubjectsPage from '../SubjectsPage'
import { ui } from '../../../utils/dom'

export default function UpdateSubjectForm({ closeId, subject }) {
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      abbreviation: formData.get('abbreviation'),
      id: subject.id,
    }
    const result = await updateSubject(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <SubjectsPage />)
  }

  return (
    <form class={styles.modal} onSubmit={onSubmit} id="updateSubjectForm">
      <h3>Редактировать предмет</h3>
      <input type="text" name="name" placeholder="Название предмета" required value={subject.name} />
      <input type="text" name="abbreviation" placeholder="Сокращение" required value={subject.abbreviation || subject.abbr} />
      <button type="submit">Редактировать</button>
    </form>
  )
}