import styles from './PageNavigation.module.css'

export default function PageNavigation() {
  return `
    <div class="${styles.navigation}">
      <a class="${styles.button}">Предыдущая неделя</a>
      <div class="${styles.date}">23.03.2026 - 29.03.2026</div>
      <a class="${styles.button}">Следующая неделя</a>
    </div>
  `
}