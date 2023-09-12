import { YMaps, Map } from "@pbe/react-yandex-maps";

function App() {
  return (
    <YMaps>
      <div>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </div>
    </YMaps>
  );
}

export default App;
