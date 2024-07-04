import { Button, Modal } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import { getSearchValue } from "../../redux/searchSlice";
import { getCoordinates } from "../../redux/coordinatesSlice";
import { getOrderCrew } from "../../redux/crewsSlice";
import { OrderRequest, OrderResponse } from "../../types/types";
import { getCurrentTime, getRandomNumber } from "../CrewsList/helpers/helpers";

interface AboutOrderProps {
    show: boolean;
    onHide: () => void;
}

export const AboutOrder = (props: AboutOrderProps) => {

    const address = useAppSelector(getSearchValue);
    const coordinates = useAppSelector(getCoordinates);
    const crew = useAppSelector(getOrderCrew);

    const orderRequest: OrderRequest = {
        source_time: getCurrentTime(),
        addresses: [
            {
                address: address,
                lat: coordinates[1],
                lon: coordinates[0],
            }
        ],
        crew_id: crew?.crew_id,
    }

    const ordeResponse: OrderResponse = {
        code: getRandomNumber(),
        descr: "OK",
        order_id: getRandomNumber(),
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    
                    Заказ №{ordeResponse.code} успешно оформлен
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4> Mесто подачи: {orderRequest.addresses[0].address}</h4>
                <p>
                    Время ожидания 5 минут. Спасибо что пользуетесь услугами нашего такси
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};