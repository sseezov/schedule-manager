import { render } from "./core/render";
import { redirect } from "./core/router";
import { initializeLocalState } from "./state/initializeLocalState";
import SchedulesPage from "./pages/schedules/SchedulesPage";
import Sidebar from "./shared/Sidebar";
import ContextMenu from "./ui/ContextMenu";

await initializeLocalState();

export default function App() {
  const { pathname } = new URL(window.location.href)
  if (pathname === '/admin' || pathname === '/admin/'){
    redirect('/admin/schedules')
  }
  return (
    <>
      <aside id="sidebarContainer">
        <Sidebar />
      </aside>
      <main id="main" class="container">
      </main>
      <div class="flashMessage"></div>
      <ContextMenu />
    </>
  )
}
