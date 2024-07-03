import { Button, Card, Stack } from "react-bootstrap";
import { getOrderCrew } from "../../redux/crewsSlice";
import { useAppSelector } from "../../redux/hooks";
import { OrderRequest, OrderResponse } from "../../types/types";
import { getCurrentTime, getRandomNumber } from "../CrewsList/helpers/helpers";
import { getSearchValue } from "../../redux/searchSlice";
import { getCoordinates } from "../../redux/coordinatesSlice";

export const Order = () => {

    const crew = useAppSelector(getOrderCrew);
    const address = useAppSelector(getSearchValue);
    const coordinates = useAppSelector(getCoordinates);

    const order: OrderRequest = {
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

    const orderCrew = () => {
        console.log(order);

        const response: OrderResponse = {
            code: getRandomNumber(),
            descr: "OK",
            order_id: getRandomNumber(),
        }
        console.log(response);
    }
    
    return (
        <>
            {
                crew !== undefined &&
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {crew?.car_mark} {crew?.car_model}
                        </Card.Title>
                        <Stack
                            direction="horizontal"
                            className='align-start'
                            gap={5}
                        >
                            <Card.Text>
                                {`цвет: ${crew?.car_color}`}
                            </Card.Text>
                            <Card.Text>
                                {`номер: ${crew?.car_number}`}
                            </Card.Text>
                        </Stack>
                        <Button 
                            variant="warning"
                            onClick={orderCrew}
                        >
                            ЗАКАЗАТЬ
                        </Button>
                    </Card.Body>
                </Card>
            }
        </>
    );
}