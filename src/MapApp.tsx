import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const MapApp = () => {
    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [56.8498, 53.2045],
                    zoom: 13,
                    controls: ["zoomControl", "fullscreenControl"],
                }}
                width={500}
                height={500}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
                <Placemark
                    modules={["geoObject.addon.balloon"]}
                    defaultGeometry={[56.8498, 53.2045]}
                    properties={{
                        balloonContentBody:
                            "This is balloon loaded by the Yandex.Maps API module system",
                    }}
                />
            </Map>
        </YMaps>
    )
}