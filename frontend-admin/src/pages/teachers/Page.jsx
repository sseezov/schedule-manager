import styles from './Page.module.css'
import { fetchTeachers } from '../../lib/data'
import TeachersCrudModal from './components/TeachersCrudModal'

export default async function Page() {
  const teachers = await fetchTeachers()

  return (
    <div>
      <h1 class={styles.title}>Преподаватели</h1>
      <table class={styles.table}>
        <thead>
          <tr>
            <th>Преподаватель</th>
            <th>Сокращение</th>
            <th>Должность</th>
            <th>Цвет</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr>
              <td>{teacher.name}</td>
              <td>{teacher.fio}</td>
              <td>{teacher.position}</td>
              <td>{teacher.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button data-id="openModal">Добавить преподавателя</button>
      <TeachersCrudModal />
    </div>
  )
}