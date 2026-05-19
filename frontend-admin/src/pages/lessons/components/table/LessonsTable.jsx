import state from '../../../../state/state';
import { daysMap } from '../../../../utils/lessons';
import HeadCell from './HeadCell';
import styles from './LessonsTable.module.css'
import TableCell from './TableCell';


export default function LessonsTable({ lessonsByGroups, weekdays, lessonsInDay }) {
  console.log(1, lessonsByGroups);
  console.log(2, weekdays);
  const { selectedGroup } = state.ui


  return (
    <table class={styles.table}>
      <thead>
        <tr>
          <th>День недели</th>
          {weekdays.map((day, idx) => (
            <th>{daysMap[day]}</th>
          ))}
        </tr>
        <tr>
          <th>Пара</th>
          {weekdays.map(() => (
            <HeadCell lessonsInDay={lessonsInDay} />
          ))}
        </tr>
      </thead>
      <tbody>
        {lessonsByGroups.map((group) => (
          <tr class={selectedGroup === group.id ? 'selectedGroup' : ''}>
            <td>{group.name}</td>
            {group.weekdays.map((day) => (
              <TableCell lessons={day.lessons} weekday={day.dayIndex} group={group}/>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
