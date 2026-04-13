import BellsPage from '../pages/bells/BellsPage.jsx'
import ClassesPage from '../pages/classes/ClassesPage.jsx'
import GroupsPage from '../pages/groups/GroupsPage.jsx'
import SubjectsPage from '../pages/subjects/SubjectsPage.jsx'
import TeachersPage from '../pages/teachers/TeachersPage.jsx'

export default {
  routes: {
    Звонки: BellsPage,
    Группы: GroupsPage,
    Предметы: SubjectsPage,
    Преподаватели: TeachersPage,
    Аудитории: ClassesPage,
  },

  async getRoute(route) {
    if (this.routes[route]) {
      const content = await this.routes[route]()
      return content
    }
    return null
  },
}
