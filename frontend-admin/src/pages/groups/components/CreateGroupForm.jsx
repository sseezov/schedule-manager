import styles from '../../pages.module.css'
import { handlers, registerSubmit } from '../../../core/handlers'
import { render } from '../../../core/render'
import GroupsPage from '../GroupsPage'
import { createGroup } from '../../../api/groups'
import { ui } from '../../../utils/dom'

export default function CreateGroupForm() {
  const onSubmit = async (e) => {
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      abbreviation: formData.get('abbreviation'),
      yearOfAdmission: formData.get('yearOfAdmission'),
    }
    const result = await createGroup(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <GroupsPage />)
  }

  return (
    <form class={styles.form} onSubmit={onSubmit}>
      <h3>Добавить группу</h3>
      <input type="text" name="name" placeholder="Название группы" required />
      <input type="text" name="yearOfAdmission" placeholder="Год поступления" required />
      <input type="text" name="abbreviation" placeholder="Сокращение" />
      <button type="submit">Добавить</button>
    </form>
  )
}
