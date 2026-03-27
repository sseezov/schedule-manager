import { registerHandler } from '../../core/init'
import styles from './CrudModal.module.css'

export default function CrudModal(classname, fields, onSubmit) {
  const id = registerHandler(onSubmit)

  return `
    <div class="modal-overlay hidden ${classname}">
      <div class="modal">
        <form class="${styles.modal}" data-id="${id}">
        ${fields.map(({ type, id, text }) => `
          <label for="${id}">${text}</label>
          <input type="${type}" id="${id}" />
          `).join('')}
        <button type="submit">Отправить форму</button>
        </form>
      </div>
    </div>
  `
}
