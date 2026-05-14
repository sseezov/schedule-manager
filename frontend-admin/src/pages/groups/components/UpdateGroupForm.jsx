import styles from '../../pages.module.css'
import { handlers } from '../../../core/handlers'
import { render } from '../../../core/render'
import GroupsPage from '../GroupsPage'
import { updateGroup } from '../../../api/groups'
import { ui } from '../../../utils/dom'

export default function UpdateGroupForm({ group }) {
  const onSubmit = async (e) => {
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      abbreviation: formData.get('abbreviation'),
      yearOfAdmission: formData.get('yearOfAdmission'),
      id: group.id,
    }
    const result = await updateGroup(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <GroupsPage />)
  }

  return (
    <form class={styles.form} onSubmit={onSubmit} id="updateGroupForm">
      <h3>Редактировать группу</h3>
      <input type="text" name="name" placeholder="ФИО" required value={group.name} />
      <input type="text" name="yearOfAdmission" placeholder="Сокращение" required value={group.yearOfAdmission} />
      <input type="text" name="abbreviation" placeholder="Должность" value={group.abbreviation} />
      <button type="submit">Редактировать</button>
    </form>
  )
}
