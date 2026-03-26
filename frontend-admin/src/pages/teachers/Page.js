import { handlers } from '../../core/init'
import CrudModal from '../../components/ui/CrudModal'
import styles from './Page.module.css'
import { fetchTeachers } from '../../lib/data'

export default async function Page() {
  const teachers = await fetchTeachers()

  const onClick = () => {
    const modal = document.querySelector('.modal-teachers')
    modal.classList.remove('hidden')
  }
  const id = handlers.getId()
  handlers[id] = onClick

  const formFields = [
    { text: 'ФИО', type: 'text', id: 'teachers-form-fio' },
    { text: 'Сокращение', type: 'text', id: 'teachers-form-abbreviation' },
    { text: 'Должность', type: 'text', id: 'teachers-form-position' },
  ]

  return `
  <h1 class="${styles.title}">Преподаватели</h1>
    <table class="${styles.table}">
      <thead>
        <tr>
          <th>Преподаватель</th>
          <th>Сокращение</th>
          <th>Должность</th>
          <th>Цвет</th>
        </tr>  
      </thead>
      <tbody>
        ${teachers.map(teacher => `<tr>
          <td>${teacher.name}</td>
          <td>${teacher.fio}</td>
          <td>${teacher.position}</td>
          <td>${teacher.color}</td>
        </tr>`).join('')} 
      </tbody>
    </table>
    <button data-id=${id}>Добавить преподавателя</button>
    ${CrudModal('modal-teachers', formFields)}
    `
}
