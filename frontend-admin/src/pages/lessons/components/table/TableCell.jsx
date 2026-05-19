import { setLesson } from '../../../../api/lessons.js';
import { refreshPage } from '../../../../core/router.js';
import state from '../../../../state/state.js';
import { lessonsToArray } from '../../../../utils/lessons.js';
import styles from './LessonsTable.module.css'

export default function TableCell({ lessons, weekday, group }) {

  const handleClick = async (lesson) => {
    if (!state.ui.selectedWorkload) return;
    if (state.ui.selectedGroup !== group.id) return;
    const {lessonNumber} = lesson
    const result = await setLesson({...state.ui.selectedWorkload, lessonNumber, scheduleId: state.currentScheduleId, weekday})
    refreshPage()
  }

  // const pairsInDay = lessonsToArray(lessonsInDay)
  return (
    <td>
      <div class={styles.pairsContainer}>
        {lessons.map((lesson, index) => (
          <div class={styles.pairSlot} onClick={(e) => handleClick(lesson)}>{lesson.text}</div>
        ))}
      </div>
    </td>
  )
}
