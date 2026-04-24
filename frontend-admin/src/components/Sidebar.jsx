import SidebarCategory from './SidebarCategory.jsx'
import styles from './Sidebar.module.css'
import render from '../core/render.js'

export default function Sidebar() {
  const { pathname } = new URL(window.location.href)

  return (
    <ol class={styles.sidebar}>
      <SidebarCategory text="Звонки" href={"/admin/bells"} isActive={pathname === "/admin/bells"}/>
      <SidebarCategory text="Группы" href={"/admin/groups"} isActive={pathname === "/admin/groups"} />
      <SidebarCategory text="Предметы" href={"/admin/subjects"} isActive={pathname === "/admin/subjects"} />
      <SidebarCategory text="Преподаватели" href={"/admin/teachers"} isActive={pathname === "/admin/teachers"} />
      <SidebarCategory text="Аудитории" href={"/admin/classes"} isActive={pathname === "/admin/classes"} />
    </ol>
  )
} 