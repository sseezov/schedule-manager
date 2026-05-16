import { setLesson } from '../../../../api/lessons.js';
import state from '../../../../state.js';
import { pairsToArray } from '../../../../utils/lessons.js';
import styles from './LessonsTable.module.css'

export default function TableCell({ lessonsInDay, group }) {
  const handleClick = async (e) => {
    if (!state.ui.selectedLesson) return;
    if (state.ui.selectedGroup !== group.id) return;
    const lessonNumber = e.target.dataset.lessonnumber
    console.log(e.target);
    console.log(lessonNumber);
    // console.log(state.ui.selectedLesson);
    const result = await setLesson({...state.ui.selectedLesson, lessonNumber})
    console.log(result);
  }

  const pairsInDay = pairsToArray(lessonsInDay)
  return (
    <td>
      <div class={styles.pairsContainer}>
        {pairsInDay.map((pair, index) => (
          <div class={styles.pairSlot} data-lessonNumber={`${index + 1}`} onClick={(e) => handleClick(e)}></div>
        ))}
      </div>
    </td>
  )
}