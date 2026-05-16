import { render } from '../../../../core/render';
import { refreshPage } from '../../../../core/router';
import state from '../../../../state';
import { deleteWorkload } from '../../../../api/workloads';
import { ui } from '../../../../utils/dom';
import InfoSection from '../InfoSection';
import styles from './Pair.module.css'

export default function Workload({ workload }) {

  const handleDeleteworkload = async () => {
    const result = await deleteWorkload(workload.id)
    ui.hideCustomMenu()
    ui.showFlashMessage(result)
    refreshPage()
  }
  const handleContextMenu = (e) => {
    ui.showCustomMenu(e.clientX, e.clientY, handleDeleteworkload)
  }
  const selectPair = () => {
    state.ui.selectedGroup = workload.groupId
    state.ui.selectedWorkload = workload
    state.ui.workloadId = workload.id
    refreshPage()
  }
  const onMouseEnter = () => {
    render("#infoSection", <InfoSection workload={workload} />)
  }
  const onMouseLeave = () => {
    render("#infoSection", <InfoSection />)
  }
  console.log(state.ui);

  return (
    <div class={state.ui.workloadId === workload.id ? `${styles.pair} ${styles.active}` : `${styles.pair}` } onMouseEnter = { onMouseEnter }
  onMouseLeave = { onMouseLeave } onClick = { selectPair } onContextMenu = { handleContextMenu } >
      <div class={styles.subjectName}>{workload.subjectAbbr}</div>
      <div class={styles.divider}></div>
      <div class={styles.workloadsCount}>{workload.lessonsPerWeek}</div>
    </div >
  )
}
