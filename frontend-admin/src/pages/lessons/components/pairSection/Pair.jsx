import { render } from '../../../../core/render';
import { refreshPage } from '../../../../core/router';
import state from '../../../../state';
import { deletePair } from '../../../../api/lessons';
import { ui } from '../../../../utils/dom';
import InfoSection from '../InfoSection';
import styles from './Pair.module.css'

export default function Pair({ lesson }) {

  const handleDeleteLesson = async () => {
    const result = await deletePair(lesson.id)
    ui.hideCustomMenu()
    ui.showFlashMessage(result)
    refreshPage()
  }

  const handleContextMenu = (e) => {
    ui.showCustomMenu(e.clientX, e.clientY, handleDeleteLesson)
  }
  const selectPair = () => {
    state.ui.selectedGroup = lesson.groupId
    state.ui.selectedLesson = lesson.id
    refreshPage()
  }
  const onMouseEnter = () => {
    render("#infoSection", <InfoSection lesson={lesson} />)
  }
  const onMouseLeave = () => {
    render("#infoSection", <InfoSection />)
  }
  return (
    <div class={state.ui.selectedLesson === lesson.id ? `${styles.pair} ${styles.active}` : `${styles.pair}` } onMouseEnter = { onMouseEnter }
  onMouseLeave = { onMouseLeave } onClick = { selectPair } onContextMenu = { handleContextMenu } >
      <div class={styles.subjectName}>{lesson.subjectAbbr}</div>
      <div class={styles.divider}></div>
      <div class={styles.lessonsCount}>{lesson.lessonsCount}</div>
    </div >
  )
}
