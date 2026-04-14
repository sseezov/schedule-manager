import styles from './GroupForm.module.css'
import { handlers, registerSubmit } from '../../../core/handlers'
import render from '../../../core/render'
import GroupsPage from '../GroupsPage'
import { createGroup } from '../../../api/groups'

export default function CreateGroupForm({ closeId }) {
  const onSubmit = async (e) => {
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      abbreviation: formData.get('abbreviation'),
      year_of_admission: formData.get('year_of_admission'),
    }
    const result = await createGroup(data)
    handlers.closeModal(closeId)
    handlers.showFlashMessage(result)
    render('#main', <GroupsPage />)
  }

  const formId = registerSubmit(onSubmit)

  return (
    <form class={styles.modal} data-handler={formId}>
      <h3>Добавить группу</h3>
      <input type="text" name="name" placeholder="Название группы" required />
      <input type="text" name="year_of_admission" placeholder="Год поступления" required />
      <input type="text" name="abbreviation" placeholder="Сокращение" />
      <button type="submit">Добавить</button>
    </form>
  )
}