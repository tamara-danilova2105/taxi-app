import { Placemark } from "@pbe/react-yandex-maps";
import { OptionsPlacemark } from "../../types/types";

interface PlacemarkAppProps {
    coordinates: number[];
}

export const PlacemarkApp = ({coordinates}: PlacemarkAppProps) => {

    const optionsPlacemark: OptionsPlacemark = {
        iconColor: '#FF8911'
    };

    return (
        <Placemark
            geometry={coordinates}
            options={optionsPlacemark}
        />
    );
};
