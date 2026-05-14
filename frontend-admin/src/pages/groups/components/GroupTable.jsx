import styles from "../../pages.module.css"

export default function GroupsTable({ groups, onEdit, onDelete }) {
  return (
    <>
      <table class={styles.table}>
        <thead>
          <tr>
            <th>Группа</th>
            <th>Год поступления</th>
            <th>Сокращение</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {groups.map(group => (
            <tr>
              <td>{group.name}</td>
              <td>{group.yearOfAdmission}</td>
              <td>{group.abbreviation}</td>
              <td><button class={`${styles.tableActionButton} ${styles.tableEditButton}`} onClick={() => onEdit(group)}>Редактировать</button></td>
              <td><button class={`${styles.tableActionButton} ${styles.tableDeleteButton}`} onClick={() => onDelete(group)}>Удалить</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
