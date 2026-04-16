import SidebarCategory from './SidebarCategory.jsx'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <ol class={styles.sidebar}>
      <SidebarCategory text="Звонки" href={"admin/bells"} />
      <SidebarCategory text="Группы" href={"admin/groups"} />
      <SidebarCategory text="Предметы" href={"admin/subjects"} />
      <SidebarCategory text="Преподаватели" href={"admin/teachers"} />
      <SidebarCategory text="Аудитории" href={"admin/classes"} />
    </ol>
  )
} 