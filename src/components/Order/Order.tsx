import { Button, Card, Stack } from "react-bootstrap";
import { getOrderCrew } from "../../redux/crewsSlice";
import { useAppSelector } from "../../redux/hooks";

export const Order = () => {

    const crew = useAppSelector(getOrderCrew);

    const orderCrew = () => {
        console.log('заказать');
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