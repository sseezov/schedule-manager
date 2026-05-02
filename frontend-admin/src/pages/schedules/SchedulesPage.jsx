import { fetchSchedules } from '../../api/schedules'
import CreateScheduleForm from './components/CreateScheduleForm'
import Modal from '../../shared/Modal'
import PageTitle from '../../shared/PageTitle'
import SchedulesTable from './components/SchedulesTable'
import { ui } from '../../utils/dom'

export default async function SchedulesPage() {
  const schedules = await fetchSchedules()
  const showModalCreateSchedule = () => ui.openModal('createSchedule')

  return (
    <>
      <div class="content">
        <PageTitle title="Расписания" />
        <SchedulesTable schedules={schedules} />
        <button onClick={showModalCreateSchedule}>Добавить расписание</button>
        <Modal modalId="createSchedule">
          <CreateScheduleForm closeId="createSchedule" />
        </Modal>
      </div>
    </>
  )
}