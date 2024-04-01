import { Placemark } from "@pbe/react-yandex-maps";
import { OptionsPlacemark } from "../../types/types";

interface PlacemarkAddressProps {
    coordinates: number[];
    color: string
}

export const PlacemarkApp = ({ coordinates, color }: PlacemarkAddressProps) => {

    const optionsPlacemark: OptionsPlacemark = {
        iconColor: color
    };

    return (
        <Placemark
            geometry={coordinates}
            options={optionsPlacemark}
        />
    );
};
