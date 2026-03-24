import styles from './BreadCrumbs.module.css'

export default function BreadCrumbs(crumbs) {
  return `
    <div class="${styles.breadcrumbs}">
      <a href='/public'>Расписание занятий</a>
      ${crumbs.map((crumb) => {
        if (crumb.type === 'ref') {
          return `<span>/</span>
            <a href="${crumb.href}">${crumb.text}</a>`
        }
        return `<span>/</span><span>${crumb.text}</span>`
      }).join('')}
    </div>
  `
}
