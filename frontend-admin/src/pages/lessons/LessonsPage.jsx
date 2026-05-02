import { fetchLessons } from "../../api/lessons"
import LessonsTable from "./components/LessonsTable";

export default async function LessonsPage() {
  const data = await fetchLessons()

  return (
    <>
      <div class='content'>
        <LessonsTable data={data} />

      </div>
    </>
  )
}
