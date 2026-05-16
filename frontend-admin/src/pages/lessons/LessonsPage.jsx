import { fetchLessons } from '../../api/lessons';
import Modal from '../../shared/Modal';
import CreatePairForm from './components/CreateWorkload';
import LessonsTable from './components/table/LessonsTable';
import WorkloadsSection from './components/workloadsSection/WorkloadsSection'
import styles from './LessonsPage.module.css'
import InfoSection from './components/InfoSection';
import { fetchWorkloads } from '../../api/workloads';

export default async function LessonsPage() {
  const { pathname } = new URL(window.location.href)
  const [, , , scheduleId] = pathname.split('/')
  const scheduleData = await fetchLessons(scheduleId);
  const workloads = await fetchWorkloads()
  console.log(11, workloads);
  const { schedule, lessons, groups, subjects, teachers } = scheduleData;

  if (!schedule) {
    return <div>Расписание не найдено</div>;
  }

  return (
    <div class={styles.crudPage}>
      <div class={styles.crudHeader}>
        <h1>Уроки: {schedule.name}</h1>
      </div>

      <div class={styles.tableWrapper}>
        <LessonsTable
          lessons={lessons}
          groups={groups}
          schedule={schedule}
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
        <CreatePairForm teachers={teachers} groups={groups} subjects={subjects} scheduleId={scheduleId} />
      </Modal>
    </div>
  );
}