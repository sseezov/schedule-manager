import { fetchLessons } from '../../api/lessons';
import Modal from '../../shared/Modal';
import CreateWorkload from './components/CreateWorkload';
import LessonsTable from './components/table/LessonsTable';
import WorkloadsSection from './components/workloadsSection/WorkloadsSection'
import styles from './LessonsPage.module.css'
import InfoSection from './components/InfoSection';
import { fetchWorkloads } from '../../api/workloads';
import { scheduleToGroups } from '../../utils/lessons';
import state from '../../state/state';

export default async function LessonsPage() {
  const { pathname } = new URL(window.location.href)
  const [, , , scheduleId] = pathname.split('/')
  state.currentScheduleId = scheduleId
  const scheduleData = await fetchLessons(scheduleId);
  // const { lessons } = scheduleToLessons(scheduleData)
  const workloads = await fetchWorkloads(scheduleId)
  // const { subjects, teachers } = scheduleData;
  const { groups, teachers, subjects, schedule } = scheduleData
  const { weekdays, lessonsInDay } = schedule
  const lessonsByGroups = scheduleToGroups(scheduleData)

  if (!scheduleData) {
    return <div>Расписание не найдено</div>;
  }

  return (
    <div class={styles.crudPage}>
      <div class={styles.crudHeader}>
        <h1>Уроки: {schedule.name}</h1>
      </div>

      <div class={styles.tableWrapper}>
        <LessonsTable
          lessonsByGroups={lessonsByGroups}
          weekdays={weekdays}
          lessonsInDay={lessonsInDay}
        />
      </div>

      <div class={styles.bottomContainer}>
        <div id="infoSection" class={styles.leftPanel}>
          <InfoSection />
        </div>
        <div id="pairSection" class={styles.rightPanel}>
          <WorkloadsSection workloads={workloads} />
        </div>
      </div>
      <Modal modalId="createLesson">
        <CreateWorkload teachers={teachers} groups={groups} subjects={subjects} scheduleId={scheduleId} />
      </Modal>
    </div>
  );
}
