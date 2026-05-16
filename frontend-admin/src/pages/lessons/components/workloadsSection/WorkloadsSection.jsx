import { fetchWorkloads } from '../../../../api/workloads';
import { ui } from '../../../../utils/dom';
import styles from '../../LessonsPage.module.css'
import Pair from './Workload';

export default function WorkloadsSection({workloads}) {
  const showModalCreateLesson = () => ui.openModal('createLesson')
  return (
    <>
      <button
        class={styles.addButton}
        onClick={showModalCreateLesson}
      >
        Добавить нагрузку
      </button>
      {workloads.map((workload) => <Pair workload={workload}/>)}
    </>
  )
}
