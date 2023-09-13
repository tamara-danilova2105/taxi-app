import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const MapApp = () => {
    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [55.75, 37.57],
                    zoom: 9,
                    controls: ["zoomControl", "fullscreenControl"],
                }}
                width={500}
                height={500}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
                <Placemark
                    modules={["geoObject.addon.balloon"]}
                    defaultGeometry={[55.75, 37.57]}
                    properties={{
                        balloonContentBody:
                            "This is balloon loaded by the Yandex.Maps API module system",
                    }}
                />
            </Map>
        </YMaps>
    )
}