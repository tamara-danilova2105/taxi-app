import { YMaps, Map } from "@pbe/react-yandex-maps";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getSearchValue, setSearch } from "../../redux/searchSlice";
import { PlacemarkApp } from "./PlacemarkApp";
import { API_KEY, endpoint } from "../../lib/const";
import { mockCrews } from "../../lib/mockCrews";
import { getCrews, setCrewList } from "../../redux/crewsSlice";
import { getCoordinates, setCoordinates } from "../../redux/coordinatesSlice";

export const MapApp = () => {

    const address = useAppSelector(getSearchValue);
    const crews = useAppSelector(getCrews);
    const coordinates = useAppSelector(getCoordinates);
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
            console.log(data);
            const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
            dispatch(setCoordinates([parseFloat(coordinates[1]), parseFloat(coordinates[0])]));
            dispatch(setCrewList(mockCrews));
        } catch (err) {
            console.error(getCoordinate.name, err);
        }
    };

    useEffect(() => {
        if (address !== '') getCoordinate();
        else dispatch(setCrewList([]));
    }, [address, dispatch]);

    const handleClickMap = async (e: ymaps.Event) => {
        const coords = e.get('coords');
        try {
            const response = await fetch(`${endpoint}&apikey=${API_KEY}&geocode=${coords[1]},${coords[0]}`);
            const data = await response.json();
            const address = data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;
            const convertAdress = address.split(', ').splice(-2).join(', ');
            dispatch(setSearch(convertAdress));
            dispatch(setCrewList(mockCrews));
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
                {
                    crews.map(crew =>
                        <PlacemarkApp
                            key={crew.crew_id}
                            coordinates={[crew.lat, crew.lon]}
                            color='#2C7865'
                        />
                    )
                }
            </Map>
        </YMaps>
    )
}