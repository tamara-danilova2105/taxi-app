import { FormSearch } from "./components/FormSearch/FormSearch";
import { MapApp } from "./components/MapApp/MapApp";

function App() {
  return (
    <div className="container_app">
        <h2>Детали заказа</h2>
        <FormSearch />
        <MapApp />
    </div>
  );
}

export default App;
