import { deleteSchedule, fetchSchedules } from '../../api/schedules'
import { render } from '../../core/render'
import CreateScheduleForm from './components/CreateScheduleForm'
import UpdateScheduleForm from './components/UpdateScheduleForm'
import Modal from '../../shared/Modal'
import ConfirmForm from '../../shared/ConfirmForm'
import PageHeader from '../shared/PageHeader'
import pages from '../pages.module.css'
import SchedulesTable from './components/SchedulesTable'
import { ui } from '../../utils/dom'
import { filterByQuery } from '../../utils/search';

export default async function SchedulesPage() {
  const schedules = await fetchSchedules()
  const showModalCreateSchedule = () => ui.openModal('createSchedule')

  const openUpdateScheduleModal = (schedule) => {
    render('#updateScheduleContent', <UpdateScheduleForm closeId="updateSchedule" schedule={schedule} />)
    ui.openModal('updateSchedule')
  }

  const handleDeleteSchedule = async (scheduleId) => {
    const result = await deleteSchedule(scheduleId)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <SchedulesPage />)
  }

  const openDeleteScheduleModal = (schedule) => {
    render(
      '#deleteScheduleContent',
      <ConfirmForm
        message="Подтвердите удаление расписания"
        onConfirm={() => handleDeleteSchedule(schedule.id)}
      />
    )
    ui.openModal('deleteSchedule')
  }

  const handleSearch = (query) => {
    const filteredSchedules = query ? filterByQuery(schedules, query) : schedules
    render(
      '#schedulesTable',
      <SchedulesTable
        schedules={filteredSchedules}
        onEdit={openUpdateScheduleModal}
        onDelete={openDeleteScheduleModal}
      />
    )
  }

  return (
    <>
      <div class={`${pages.crudPage} content`}>
        <PageHeader
          title="Расписания"
          buttonText="Добавить расписание"
          onAdd={showModalCreateSchedule}
          searchPlaceholder="Поиск по расписаниям"
          onSearch={handleSearch}
        />
        <div id="schedulesTable">
          <SchedulesTable
            schedules={schedules}
            onEdit={openUpdateScheduleModal}
            onDelete={openDeleteScheduleModal}
          />
        </div>
        <Modal modalId="createSchedule">
          <CreateScheduleForm closeId="createSchedule" />
        </Modal>
        <Modal modalId="updateSchedule" />
        <Modal modalId="deleteSchedule" />
      </div>
    </>
  )
}
