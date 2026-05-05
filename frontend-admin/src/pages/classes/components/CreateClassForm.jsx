import styles from '../../pages.module.css'
import { render } from '../../../core/render'
import ClassesPage from '../ClassesPage'
import { createClass } from '../../../api/classes'
import { ui } from '../../../utils/dom'

export default function CreateClassForm() {
  const onSubmit = async (e) => {
    const formData = new FormData(e.target)
    const capacity = formData.get('capacity')
    const data = {
      name: formData.get('name'),
      abbreviation: formData.get('abbreviation'),
      capacity: capacity ? Number(capacity) : null,
      building: formData.get('building'),
    }
    const result = await createClass(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <ClassesPage />)
  }

  return (
    <form class={styles.form} onSubmit={onSubmit}>
      <h3>Добавить аудиторию</h3>
      <input type="text" name="name" placeholder="Название" required />
      <input type="text" name="abbreviation" placeholder="Сокращение" />
      <input type="number" name="capacity" placeholder="Количество мест" min="0" />
      <input type="text" name="building" placeholder="Корпус" />
      <button type="submit">Добавить</button>
    </form>
  )
}
