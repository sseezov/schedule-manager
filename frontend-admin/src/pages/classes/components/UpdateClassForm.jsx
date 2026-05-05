import styles from '../../pages.module.css'
import { render } from '../../../core/render'
import ClassesPage from '../ClassesPage'
import { updateClass } from '../../../api/classes'
import { ui } from '../../../utils/dom'

export default function UpdateClassForm({ classItem }) {
  const onSubmit = async (e) => {
    const formData = new FormData(e.target)
    const capacity = formData.get('capacity')
    const data = {
      name: formData.get('name'),
      abbreviation: formData.get('abbreviation'),
      capacity: capacity ? Number(capacity) : null,
      building: formData.get('building'),
      id: classItem.id,
    }
    const result = await updateClass(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <ClassesPage />)
  }

  return (
    <form class={styles.form} onSubmit={onSubmit} id="updateClassForm">
      <h3>Редактировать аудиторию</h3>
      <input type="text" name="name" placeholder="Название" required value={classItem.name} />
      <input type="text" name="abbreviation" placeholder="Сокращение" value={classItem.abbreviation} />
      <input type="number" name="capacity" placeholder="Количество мест" min="0" value={classItem.capacity} />
      <input type="text" name="building" placeholder="Корпус" value={classItem.building} />
      <button type="submit">Редактировать</button>
    </form>
  )
}
