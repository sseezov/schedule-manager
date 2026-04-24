import App from '../App.jsx'
import BellsPage from '../pages/bells/BellsPage.jsx'
import ErrorPage from '../pages/Error.jsx'
import SubjectsPage from '../pages/subjects/SubjectsPage.jsx'
import TeachersPage from '../pages/teachers/TeachersPage.jsx'
import ClassesPage from '../pages/classes/ClassesPage.jsx'
import GroupsPage from '../pages/groups/GroupsPage.jsx'
import render from './render.js'
import Sidebar from '../components/Sidebar.jsx'

console.log('load')

const routes = [
  { path: '/admin', component: App, parentSelector: '#app' },
  { path: '/admin/teachers', component: TeachersPage, parentSelector: '#main' },
  { path: '/admin/bells', component: BellsPage, parentSelector: '#main' },
  { path: '/admin/subjects', component: SubjectsPage, parentSelector: '#main' },
  { path: '/admin/classes', component: ClassesPage, parentSelector: '#main' },
  { path: '/admin/groups', component: GroupsPage, parentSelector: '#main' },
]

const navigate = pathname => routes
  .find((route) => {
    const pattern = route.path.replace(/:[^/]+/g, '([^/]+)') + '/?$'
    const regex = new RegExp('^' + pattern)
    return regex.test(pathname)
  }) || { component: ErrorPage, parentSelector: '#app' }

export const mountRoute = async () => {
  const href = (window.location.href).replace(/\/+$/, '')
  if (window.location.href.at(-1) === '/') history.replaceState({}, '', href)
  const { pathname } = new URL(href)
  const { component, parentSelector } = navigate(pathname)
  render('#sidebar-container', Sidebar()) // для ререндера сайдбара
  render(parentSelector, component())
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
