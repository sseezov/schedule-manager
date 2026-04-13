export default function BellsTable({ bells }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Урок</td>
          <td>Начало урока</td>
          <td>Конец урока</td>
          <td>Длина урока</td>
          <td>Длина перерыва</td>
        </tr>
      </thead>
      <tbody>
        {bells.map((bell) => {
          return <tr>
            <td>{bell.number}</td>
            <td>{bell.startTime}</td>
            <td>{bell.endTime}</td>
            <td>{bell.length}</td>
            <td>{bell.break}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}