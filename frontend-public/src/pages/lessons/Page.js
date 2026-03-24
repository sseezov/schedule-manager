import DayTable from './components/DayTable'
import { addWindows, sortLessonsByDays } from '../../lib/helpers/sortHelpers'
import styles from './Page.module.css'
import BreadCrumbs from '../../components/BreadCrumbs'
import { fetchLessons } from '../../lib/data'
import PageNavigation from '../../components/PageNavigation'

export default async function Page() {
  const { startDate, lessons } = await fetchLessons()
  const sortedLessons = sortLessonsByDays(lessons)
  const days = Object.keys(sortedLessons)
  const teacher = lessons[0].teachers[0].fio

  return `
  ${PageNavigation()}
  ${BreadCrumbs([{ type: 'ref', href: '/public/teachers', text: 'Преподаватели' }, { text: teacher }])}
    <div class=${styles.scheduleDashboard}>
      <h1 class=${styles.scheduleHeader}>Страница с расписанием</h1>
      <div class=${styles.scheduleGrid}>
        ${days.map(day => DayTable({ lessons: addWindows(sortedLessons[day]), startDate })).join('\n')}
      </div>
    </div>
  `
}
