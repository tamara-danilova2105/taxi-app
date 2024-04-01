import { YMaps, Map } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSearch } from "../../redux/searchSlice";
import { PlacemarkApp } from "./PlacemarkApp";
import { API_KEY, endpoint } from "../../lib/const";

export const MapApp = () => {

    const [coordinates, setCoordinates] = useState([56.8498, 53.2045]);
    const address = useAppSelector((state) => state.search.value);
    const dispatch = useAppDispatch();

    const convertAdress = () => {
        const convertedAddress = address.replace(/\s+/g, '+').replace(/\+,/g, ',');
        return convertedAddress;
    };

    const getCoordinate = async () => {
        const city = 'Ижевск, '
        try {
            const response = await fetch(`${endpoint}&apikey=${API_KEY}&geocode=${city}${convertAdress()}`);
            const data = await response.json();
            const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
            setCoordinates([parseFloat(coordinates[1]), parseFloat(coordinates[0])])
        } catch (err) {
            console.error(getCoordinate.name, err);
        }
    };

    useEffect(() => {
        if (address !== '') {
            getCoordinate()
        }
    }, [address]);

    const handleClickMap = async (e: ymaps.Event) => {
        const coords = e.get('coords');
        try {
            const response = await fetch(`${endpoint}&geocode=${coords[1]},${coords[0]}`);
            const data = await response.json();
            const address = data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;
            dispatch(setSearch(address));
        } catch (err) {
            console.error(handleClickMap.name, err);
        }
    };

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
                onClick={handleClickMap}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
                <PlacemarkApp
                    coordinates={coordinates}
                    color='#FF8911'
                />
            </Map>
        </YMaps>
    )
}