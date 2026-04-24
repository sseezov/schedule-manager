import Main from './components/Main.jsx'
import Sidebar from './components/Sidebar.jsx'
import styles from './App.module.css'

export default function App() {
  return (
    <div class={styles.container}>
      <div id='sidebar-container' class={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <Main />
      <div class="flash-message"></div>
    </div>
  )
}