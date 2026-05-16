export default function InfoSection({ workload }) {
  if (!workload) {
    return <div></div>
  } else
    return (
      <div>
        <div>{workload.groupName}</div>
        <div>{workload.subjectName}</div>
        <div>{workload.teacherName}</div>
      </div>
    )
}
