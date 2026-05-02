import styles from './ScheduleForm.module.css'
import { createSchedule } from '../../../api/schedules'
import { render } from '../../../core/render'
import SchedulesPage from '../SchedulesPage'
import { ui } from '../../../utils/dom'

export default function CreateScheduleForm({ closeId }) {
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    // Получаем дни недели из чекбоксов
    const weekdays = []
    for (let i = 1; i <= 7; i++) {
      if (formData.get(`weekday_${i}`)) {
        weekdays.push(i)
      }
    }
    
    const data = {
      name: formData.get('name'),
      lessonsInDay: parseInt(formData.get('lessonsInDay')),
      weekdays: weekdays,
    }
    const result = await createSchedule(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <SchedulesPage />)
  }

  return (
    <form class={styles.modal} onSubmit={onSubmit}>
      <h3>Добавить расписание</h3>
      <input type="text" name="name" placeholder="Название расписания" required />
      <input type="number" name="lessonsInDay" placeholder="Количество пар в день" required min="1" max="8" />
      
      <div class={styles.weekdays}>
        <label><input type="checkbox" name="weekday_1" value="1" /> Пн</label>
        <label><input type="checkbox" name="weekday_2" value="2" /> Вт</label>
        <label><input type="checkbox" name="weekday_3" value="3" /> Ср</label>
        <label><input type="checkbox" name="weekday_4" value="4" /> Чт</label>
        <label><input type="checkbox" name="weekday_5" value="5" /> Пт</label>
        <label><input type="checkbox" name="weekday_6" value="6" /> Сб</label>
        <label><input type="checkbox" name="weekday_7" value="7" /> Вс</label>
      </div>
      
      <button type="submit">Добавить</button>
    </form>
  )
}
