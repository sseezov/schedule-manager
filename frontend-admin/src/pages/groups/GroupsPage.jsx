import { deleteGroup, fetchGroups } from '../../api/groups'
import CreateGroupForm from './components/CreateGroupForm'
import UpdateGroupForm from './components/UpdateGroupForm'
import { render } from '../../core/render'
import Modal from '../../shared/Modal'
import ConfirmForm from '../../shared/ConfirmForm'
import PageHeader from '../shared/PageHeader'
import GroupsTable from './components/GroupTable'
import Sidebar from '../../shared/Sidebar'
import styles from '../pages.module.css'
import { ui } from '../../utils/dom'
import { filterByQuery } from '../../utils/search';

export default async function GroupsPage() {
  const groups = await fetchGroups()
  const showModalCreateGroup = () => ui.openModal('createGroup')

  const openUpdateGroupModal = (group) => {
    render('#updateGroupContent', <UpdateGroupForm closeId="updateGroup" group={group} />)
    ui.openModal('updateGroup')
  }

  const handleDeleteGroup = async (groupId) => {
    const result = await deleteGroup(groupId)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <GroupsPage />)
  }

  const openDeleteGroupModal = (group) => {
    render(
      '#deleteGroupContent',
      <ConfirmForm
        message="Подтвердите удаление группы"
        onConfirm={() => handleDeleteGroup(group.id)}
      />
    )
    ui.openModal('deleteGroup')
  }

  const handleSearch = (query) => {
    const filteredGroups = query ? filterByQuery(groups, query) : groups
    render(
      '#groupsTable',
      <GroupsTable
        groups={filteredGroups}
        onEdit={openUpdateGroupModal}
        onDelete={openDeleteGroupModal}
      />
    )
  }

  return (
    <>
      <div class={`content ${styles.crudPage}`}>
        <PageHeader
          title="Группы"
          buttonText="Добавить группу"
          onAdd={showModalCreateGroup}
          searchPlaceholder="Поиск по группам"
          onSearch={handleSearch}
        />
        <div id="groupsTable">
          <GroupsTable
            groups={groups}
            onEdit={openUpdateGroupModal}
            onDelete={openDeleteGroupModal}
          />
        </div>
        <Modal modalId="createGroup">
          <CreateGroupForm closeId="createGroup" />
        </Modal>
        <Modal modalId="updateGroup" />
        <Modal modalId="deleteGroup" />
      </div>
    </>
  )
}
