import { fetchBells } from "../../api/bells";
import PageTitle from "../../components/shared/PageTitle";
import BellsTable from "./components/BellsTable";

export default async function BellsPage() {
  const bells = await fetchBells()

  return (<div>
    <PageTitle title="Звонки" />
    <BellsTable bells={[]}/>

  </div>)

}
