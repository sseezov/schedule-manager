import styles from './TeachersCrudModal.module.css'
import { handlers, registerHandler } from '../../../core/init'
import { createTeacher } from '../../../lib/actions'

export default function TeachersCrudModal() {
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      fio: formData.get('fio'),
      abbr: formData.get('abbr'),
      position: formData.get('position'),
    }
    const result = await createTeacher(data)
    if (result) {
      handlers.closeModal()
      handlers.showFlashMessage({ type: 'success', message: 'Пользователь успешно создан!' })
    }
  }

  const id = registerHandler(onSubmit)

  return (
    <div class="modal-overlay hidden">
      <div class="modal">
        <button data-id="closeModal" class="modal-close" type="button" aria-label="Закрыть">&times;</button>
        <form class={styles.modal} data-id={id}>
          <h3>Добавить преподавателя</h3>
          <input type="text" name="fio" placeholder="ФИО" />
          <input type="text" name="abbr" placeholder="Сокращение" />
          <input type="text" name="position" placeholder="Должность" />
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  )
}