import { Stack } from "react-bootstrap";
import { CrewsList } from "./components/CrewsList/ui/CrewsList";
import { FormSearch } from "./components/FormSearch/FormSearch";
import { MapApp } from "./components/MapApp/MapApp";
import { Order } from "./components/Order/Order";

function App() {
  return (
    <Stack gap={3} className="col-md-6 mx-auto">
      <h2 className="mx-auto">Детали заказа</h2>
      <FormSearch />
      <Order />
      <Stack
        direction="horizontal"
        className="justify-content-between"
      >
        <MapApp />
        <CrewsList />
      </Stack>
    </Stack>
  );
}

export default App;
