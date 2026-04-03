import Calls from '../pages/calls/Page'
import styles from './Main.module.css'

export default function Main() {
  return (
    <div class={styles.main} id="main">
      <Calls />
    </div>
  )
}