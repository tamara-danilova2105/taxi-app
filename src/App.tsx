import { Stack } from "react-bootstrap";
import { CrewsList } from "./components/CrewsList/ui/CrewsList";
import { FormSearch } from "./components/FormSearch/FormSearch";
import { MapApp } from "./components/MapApp/MapApp";

function App() {
  return (
    <Stack gap={3} className="col-md-6 mx-auto">
      <h2 className="mx-auto">Детали заказа</h2>
      <FormSearch />
      <Stack direction="horizontal" className="align-start" gap={3}>
        <MapApp />
        <CrewsList />
      </Stack>
    </Stack>
  );
}

export default App;
