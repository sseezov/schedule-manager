import { handlers } from "../../core/handlers"

export default function Modal({ modalId, children }) {
  return (
    <div id={modalId} class='modal-overlay hidden'>
      <div class="modal">
        <button onClick={() => handlers.closeModal(modalId)} class="modal-close" type="button" aria-label="Закрыть">&times;</button>
        <div id={`${modalId}-content`}>
          {children}
        </div>
      </div>
    </div>)
}
