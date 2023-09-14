import { FormSearch } from "./FormSearch";
import { MapApp } from "./MapApp";

function App() {
  return (
    <div>
      <div className="header">
        <h2>Детали заказа</h2>
      </div>
      <div className="container_form">
        <FormSearch />
      </div>
      <div className="container_result">
        <MapApp />
      </div>
    </div>
  );
}

export default App;
