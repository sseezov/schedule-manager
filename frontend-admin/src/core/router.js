import Calls from '../pages/calls/Page.jsx'
import Classes from '../pages/classes/Page.jsx'
import Groups from '../pages/groups/Page.jsx'
import Subjects from '../pages/subjects/Page.jsx'
import Teachers from '../pages/teachers/Page.jsx'

export default {
  routes: {
    Звонки: Calls,
    Группы: Groups,
    Предметы: Subjects,
    Преподаватели: Teachers,
    Аудитории: Classes,
  },

  async getRoute(route) {
    if (this.routes[route]) {
      const content = await this.routes[route]()
      return content
    }
    return null
  },
}
