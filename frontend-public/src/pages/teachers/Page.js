import BreadCrumbs from '../../components/BreadCrumbs'
import { fetchTeachers } from '../../lib/data'
import TeacherName from './components/Teacher'

export default async function Teachers() {
  const teachers = await fetchTeachers()

  const teachersElements = teachers.map(teacher => TeacherName(teacher)).join('\n')
  return `
    ${BreadCrumbs([{ type: 'ref', href: '/public/teachers', text: 'Преподаватели' }])}
    <div>${teachersElements}</div>
  `
}
