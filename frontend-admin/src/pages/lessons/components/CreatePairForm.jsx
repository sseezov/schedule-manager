import styles from '../../pages.module.css'
import { render } from '../../../core/render'
import { ui } from '../../../utils/dom'
import LessonsPage from '../LessonsPage';
import { createPair } from '../../../api/lessons';

export default function CreatePairForm({ groups, teachers, subjects, scheduleId }) {

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      groupId: formData.get('groupId'),
      teacherId: formData.get('teacherId'),
      subjectId: formData.get('subjectId'),
      lessonsCount: formData.get('lessonsCount'),
      scheduleId: scheduleId
    }
    const result = await createPair(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <LessonsPage />)
  }

  return (
    <form class={styles.form} onSubmit={onSubmit}>
      <h3>Добавить нагрузку</h3>

      <label htmlFor="groupId">Группа</label>
      <select name="groupId" required>
        {groups.map(group => (
          <option value={group.id}>
            {group.name} ({group.abbreviation})
          </option>
        ))}
      </select>

      <label htmlFor="teacherId">Учитель</label>
      <select name="teacherId" required>
        {teachers.map(teacher => (
          <option value={teacher.id}>
            {teacher.fio} ({teacher.position})
          </option>
        ))}
      </select>

      <label htmlFor="subjectId">Предмет</label>
      <select name="subjectId" required>
        {subjects.map(subject => (
          <option value={subject.id}>
            {subject.name} ({subject.abbreviation})
          </option>
        ))}
      </select>

      <label htmlFor="subjectId">Количество уроков</label>
      <input
        type="number"
        name="lessonsCount"
        placeholder="Количество уроков"
        required
        min="1"
      />

      <button type="submit">Добавить нагрузку</button>
    </form>
  )
}