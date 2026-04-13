import { fetchGroups } from '../../api/groups'
import CreateGroupForm from './components/CreateGroupForm'
import { handlers, registerClick } from '../../core/handlers'
import Modal from '../../components/shared/Modal'
import PageTitle from '../../components/shared/PageTitle'
import GroupsTable from './components/GroupTable'

export default async function GroupsPage() {
  const groups = await fetchGroups()
  const showModalCreateTeacher = () => handlers.openModal('createGroup')
  const idCreate = registerClick(showModalCreateTeacher)

  return (
    <div>
      <PageTitle title="Группы" />
      <GroupsTable groups={groups}/>
      <button data-id={idCreate}>Добавить группу</button>
      <Modal modalId="createGroup">
        <CreateGroupForm closeId="createGroup"/>
      </Modal>
    </div>
  )
}