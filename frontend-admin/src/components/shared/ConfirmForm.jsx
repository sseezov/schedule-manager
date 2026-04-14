import styles from './ConfirmForm.module.css'

export default function ConfirmForm({ message, onConfirm, onCancel }) {
  
  return (
    <form class={styles.confirmForm} onSubmit={onConfirm} id="confirmForm">
      <p class={styles.message}>{message}</p>
      <div class={styles.actions}>
        <button type="submit" class={styles.submitBtn}>ОК</button>
        <button onClick={onCancel} type="button" class={styles.cancelBtn}>Отмена</button>
      </div>
    </form>
  )
}