import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";

export const MapApp = () => {

    const address = useAppSelector((state) => state.search.value);

    const endpoint = 'https://geocode-maps.yandex.ru/1.x/';
    const API_KEY = '911ef0a9-0e85-4013-935d-af73ada6461f';
    const [coordinates, setCoordinates] = useState([56.8498, 53.2045]);

    const convertAdress = () => {
        const convertedAddress = address.replace(/\s+/g, '+').replace(/\+,/g, ',');
        return convertedAddress;
    };

    const getCoordinate = async () => {
        const city = 'Ижевск, '
        try {
            const response = await fetch(`${endpoint}?format=json&apikey=${API_KEY}&geocode=${city}${convertAdress()}`);
            const data = await response.json();
            const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
            setCoordinates([parseFloat(coordinates[1]), parseFloat(coordinates[0])])
        } catch(err) {
            console.error(getCoordinate.name, err);
        }
    };

    useEffect(() => {
        if (address !== '') {
            getCoordinate()
        }
    }, [address]);

    return (
        <YMaps>
            <Map
                state={{
                    center: coordinates,
                    zoom: 15,
                    controls: ["zoomControl", "fullscreenControl"],
                }}
                width={500}
                height={500}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
                <Placemark
                    modules={["geoObject.addon.balloon"]}
                    geometry={coordinates}
                />
            </Map>
        </YMaps>
    )
}