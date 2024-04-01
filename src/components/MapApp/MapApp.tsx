import { YMaps, Map } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSearch } from "../../redux/searchSlice";
import { PlacemarkApp } from "./PlacemarkApp";

export const MapApp = () => {

    const endpoint = 'https://geocode-maps.yandex.ru/1.x/';
    const API_KEY = '911ef0a9-0e85-4013-935d-af73ada6461f';
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
            const response = await fetch(`${endpoint}?format=json&apikey=${API_KEY}&geocode=${city}${convertAdress()}`);
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
            const response = await fetch(`${endpoint}?format=json&geocode=${coords[1]},${coords[0]}`);
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
                }}
                width={500}
                height={500}
                onClick={handleClickMap}
            >
                <PlacemarkApp
                    coordinates={coordinates}
                />
            </Map>
        </YMaps>
    )
}