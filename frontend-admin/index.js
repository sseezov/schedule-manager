import App from './src/App.jsx';
import BellsPage from './src/pages/bells/BellsPage.jsx';
import ErrorPage from './src/pages/Error.jsx';
import SubjectsPage from './src/pages/subjects/SubjectsPage.jsx';
import TeachersPage from './src/pages/teachers/TeachersPage.jsx';
import ClassesPage from './src/pages/classes/ClassesPage.jsx';
import GroupsPage from './src/pages/groups/GroupsPage.jsx';
import { initWood } from './src/core/initWood.js';
import LessonsPage from './src/pages/lessons/LessonsPage.jsx';
import SchedulesPage from './src/pages/schedules/SchedulesPage.jsx';

const routes = [
  { path: '/admin/teachers', component: TeachersPage, parentSelector: '#main' },
  { path: '/admin/bells/:id', component: BellsPage, parentSelector: '#main' },
  { path: '/admin/subjects', component: SubjectsPage, parentSelector: '#main' },
  { path: '/admin/classes', component: ClassesPage, parentSelector: '#main' },
  { path: '/admin/groups', component: GroupsPage, parentSelector: '#main' },
  { path: '/admin/lessons/:id', component: LessonsPage, parentSelector: '#main' },
  { path: '/admin/schedules', component: SchedulesPage, parentSelector: '#main' },
];

const errorComponent = { component: ErrorPage, parentSelector: '#app' };

initWood(App, routes, errorComponent);
