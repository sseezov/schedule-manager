// pages/schedules/components/UpdateScheduleForm.jsx
import styles from './ScheduleForm.module.css'
import { updateSchedule } from '../../../api/schedules'
import { render } from '../../../core/render'
import SchedulesPage from '../SchedulesPage'
import { ui } from '../../../utils/dom'

export default function UpdateScheduleForm({ closeId, schedule }) {
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const weekdays = []
    for (let i = 1; i <= 7; i++) {
      if (formData.get(`weekday_${i}`)) {
        weekdays.push(i)
      }
    }
    
    const data = {
      id: schedule.id,
      name: formData.get('name'),
      lessonsInDay: parseInt(formData.get('lessonsInDay')),
      weekdays: weekdays,
    }
    const result = await updateSchedule(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <SchedulesPage />)
  }

  const isChecked = (day) => schedule.weekdays?.includes(day)

  return (
    <form class={styles.modal} onSubmit={onSubmit} id="updateScheduleForm">
      <h3>Редактировать расписание</h3>
      <input type="text" name="name" placeholder="Название расписания" required value={schedule.name} />
      <input type="number" name="lessonsInDay" placeholder="Количество пар в день" required min="1" max="8" value={schedule.lessonsInDay} />
      
      <div class={styles.weekdays}>
        <label><input type="checkbox" name="weekday_1" value="1" defaultChecked={isChecked(1)} /> Пн</label>
        <label><input type="checkbox" name="weekday_2" value="2" defaultChecked={isChecked(2)} /> Вт</label>
        <label><input type="checkbox" name="weekday_3" value="3" defaultChecked={isChecked(3)} /> Ср</label>
        <label><input type="checkbox" name="weekday_4" value="4" defaultChecked={isChecked(4)} /> Чт</label>
        <label><input type="checkbox" name="weekday_5" value="5" defaultChecked={isChecked(5)} /> Пт</label>
        <label><input type="checkbox" name="weekday_6" value="6" defaultChecked={isChecked(6)} /> Сб</label>
        <label><input type="checkbox" name="weekday_7" value="7" defaultChecked={isChecked(7)} /> Вс</label>
      </div>
      
      <button type="submit">Редактировать</button>
    </form>
  )
}