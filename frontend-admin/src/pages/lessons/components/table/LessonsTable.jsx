import state from '../../../../state';
import { daysMap } from '../../../../utils/lessons';
import HeadCell from './HeadCell';
import styles from './LessonsTable.module.css'
import TableCell from './TableCell';


export default function LessonsTable({ groups, schedule }) {
  const { weekdays, lessonsInDay } = schedule
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
          {weekdays.map((day, idx) => (
            <HeadCell lessonsInDay={lessonsInDay} />
          ))}
        </tr>
      </thead>
      <tbody>
        {groups.map((group) => (
          <tr class={selectedGroup === group.id ? 'selectedGroup' : ''}>
            <td>{group.name}</td>
            {weekdays.map((day, idx) => (
              <TableCell lessonsInDay={lessonsInDay} group={group} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}