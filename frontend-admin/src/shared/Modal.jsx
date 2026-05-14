import { handlers } from "../core/handlers"
import { ui } from "../utils/dom"

export default function Modal({ modalId, children }) {
  return (
    <div id={modalId} class='modalOverlay hidden'>
      <div class="modal">
        <button onClick={() => ui.closeModal()} class="modalClose" type="button" aria-label="Закрыть">&times;</button>
        <div id={`${modalId}-content`}>
          {children}
        </div>
      </div>
    </div>)
}
