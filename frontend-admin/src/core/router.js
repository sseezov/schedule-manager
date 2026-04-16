import App from '../App.jsx'
import BellsPage from '../pages/bells/BellsPage.jsx'
import ErrorPage from '../pages/Error.jsx'
import SubjectsPage from '../pages/subjects/SubjectsPage.jsx'
import TeachersPage from '../pages/teachers/TeachersPage.jsx'
import ClassesPage from '../pages/classes/ClassesPage.jsx'
import GroupsPage from '../pages/groups/GroupsPage.jsx'

console.log('load')

const routes = [
  { path: '/admin', component: App },
  { path: '/admin/teachers', component: TeachersPage },
  { path: '/admin/bells', component: BellsPage },
  { path: '/admin/subjects', component: SubjectsPage },
  { path: '/admin/classes', component: ClassesPage },
  { path: '/admin/groups', component: GroupsPage },
]

const navigate = (pathname) => {
  const route = routes
    .find((route) => {
      const pattern = route.path.replace(/:[^/]+/g, '([^/]+)') + '/?$'
      const regex = new RegExp('^' + pattern)
      return regex.test(pathname)
    })
  return route ? route.component : ErrorPage
}

export const mountRoute = async () => {
  const href = (window.location.href).replace(/\/+$/, '')
  if (window.location.href.at(-1) === '/') history.replaceState({}, '', href)
  const { pathname } = new URL(href)
  const content = navigate(pathname)
  const app = document.querySelector('#app')
  app.innerHTML = await content()
}

document.addEventListener('click', async (event) => {
  const link = event.target.closest('a')
  if (link) {
    const href = link.getAttribute('href')
    event.preventDefault()
    if (href === 'back') {
      history.back()
      return
    }
    history.pushState({}, '', `${href}`)
    mountRoute()
  }
})

window.addEventListener('popstate', () => mountRoute())
