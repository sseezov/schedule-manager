import { setLesson } from '../../../../api/lessons.js';
import { decrementWorkload } from '../../../../api/workloads.js';
import { refreshPage } from '../../../../core/router.js';
import store from '../../../../state/store.js';
import { ui } from '../../../../utils/dom.js';
import { lessonsToArray } from '../../../../utils/lessons.js';
import styles from './LessonsTable.module.css'

export default function TableCell({ lessons, weekday, group }) {
  const handleClick = async (lesson) => {
    if (!store.ui.selectedWorkload) return;
    if (store.ui.selectedGroup !== group.id) return;
    const {lessonNumber} = lesson
    const result = await setLesson({...store.ui.selectedWorkload, lessonNumber, scheduleId: store.currentScheduleId, weekday})
    decrementWorkload(store.ui.selectedWorkload.workloadId)
    ui.showFlashMessage(result)
    refreshPage()
  }

  return (
    <td>
      <div class={styles.pairsContainer}>
        {lessons.map((lesson, index) => (
          <div class={`${styles.pairSlot} ${lesson.style}`} onClick={(e) => handleClick(lesson)}>{lesson.text}</div>
        ))}
      </div>
    </td>
  )
}
