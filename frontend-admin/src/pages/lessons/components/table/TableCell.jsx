import state from '../../../../state.js';
import { pairsToArray } from '../../../../utils/lessons.js';
import styles from './LessonsTable.module.css'

export default function TableCell({ lessonsInDay, group }) {
  const handleClick = () => {
    if (!state.ui.selectedLesson) return;
    if (state.ui.selectedGroup !== group.id) return;
    console.log('попал');
  }

  const pairsInDay = pairsToArray(lessonsInDay)
  return (
    <td>
      <div class={styles.pairsContainer}>
        {pairsInDay.map(() => (
          <div class={styles.pairSlot} onClick={handleClick}></div>
        ))}
      </div>
    </td>
  )
}