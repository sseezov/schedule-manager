import BellsPage from '../pages/bells/BellsPage'
import styles from './Main.module.css'

export default function Main() {
  return (
    <div class={styles.main} id="main">
      <BellsPage />
    </div>
  )
}