import Main from './components/Main.jsx'
import Sidebar from './components/Sidebar.jsx'
import styles from './App.module.css'

export default function App() {
  return (
    <div class={styles.container}>
      <Sidebar />
      <Main />
      <div class="flash-message"></div>
    </div>
  )
}