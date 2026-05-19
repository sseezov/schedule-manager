import SidebarCategory from './SidebarCategory.jsx'
import styles from './Sidebar.module.css'
import { redirect } from '../core/router.js'
import state from '../state/state.js'

export default function Sidebar() {
  const { currentScheduleId } = state
  const { pathname } = new URL(window.location.href)
  const handleClick = (e, path) => {
    const sidebarButtons = document.querySelectorAll('.sidebarBtn')
    sidebarButtons.forEach((btn) => btn.classList.remove('activeNavBtn'))
    e.target.classList.add('activeNavBtn')
    redirect(path)
  }

  return (
    <ol class={styles.sidebar}>
      <SidebarCategory text="Расписания" handler={(e) => handleClick(e, "/admin/schedules")} isActive={pathname.startsWith("/admin/schedules")} />
      <SidebarCategory text="Сетка уроков" handler={(e) => handleClick(e, `/admin/lessons/${currentScheduleId}`)} isActive={pathname.startsWith("/admin/lessons")} />
      <SidebarCategory text="Звонки" handler={(e) => handleClick(e, `/admin/bells/${currentScheduleId}`)} isActive={pathname.startsWith("/admin/bells")} />
      <SidebarCategory text="Группы" handler={(e) => handleClick(e, "/admin/groups")} isActive={pathname === "/admin/groups"} />
      <SidebarCategory text="Предметы" handler={(e) => handleClick(e, "/admin/subjects")} isActive={pathname === "/admin/subjects"} />
      <SidebarCategory text="Преподаватели" handler={(e) => handleClick(e, "/admin/teachers")} isActive={pathname === "/admin/teachers"} />
      <SidebarCategory text="Аудитории" handler={(e) => handleClick(e, "/admin/classes")} isActive={pathname === "/admin/classes"} />
    </ol>
  )
}
