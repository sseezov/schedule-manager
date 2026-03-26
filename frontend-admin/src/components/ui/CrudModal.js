import styles from './CrudModal.module.css'

export default function CrudModal(classname, fields) {
  return `
    <div class="modal-overlay hidden ${classname}">
      <div class="modal">
        <form class="${styles.modal}">
        ${fields.map(({ type, id, text }) => {
          return `
          <label for="${id}">${text}</label>
          <input type="${type}" id="${id}" />
          `
        }).join('')}
        <button type="submit">Отправить форму</button>
        </form>
      </div>
    </div>
  `
}
