import SidebarCategory from './SidebarCategory.jsx'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <ol class={styles.sidebar}>
      <SidebarCategory text="Звонки" />
      <SidebarCategory text="Группы" />
      <SidebarCategory text="Предметы" />
      <SidebarCategory text="Преподаватели" />
      <SidebarCategory text="Аудитории" />
    </ol>
  )
}