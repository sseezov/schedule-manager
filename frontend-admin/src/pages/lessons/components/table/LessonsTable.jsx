import state from '../../../../state';
import { daysMap } from '../../../../utils/lessons';
import HeadCell from './HeadCell';
import styles from './LessonsTable.module.css'
import TableCell from './TableCell';


export default function LessonsTable({ groups, schedule }) {
  const { weekdays, lessonsInDay } = schedule
  // console.log(123, weekdays);
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
        {groups.map((group) => (
          <tr class={selectedGroup === group.id ? 'selectedGroup' : ''}>
            <td>{group.name}</td>
            {weekdays.map((day) => (
              <TableCell lessonsInDay={lessonsInDay} group={group} day={day}/>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}