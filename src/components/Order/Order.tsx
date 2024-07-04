import { Button, Card, Stack } from "react-bootstrap";
import { getOrderCrew } from "../../redux/crewsSlice";
import { useAppSelector } from "../../redux/hooks";
import styles from './Order.module.scss';
import { useState } from "react";
import { AboutOrder } from "../AboutOrder/AboutOrder";

export const Order = () => {
    const crew = useAppSelector(getOrderCrew);
    const [modalShow, setModalShow] = useState(false);

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
                            className="justify-content-between"
                        >
                            <Stack
                                className={styles.noMarginBottom}
                                direction="horizontal"
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
                                onClick={() => setModalShow(true)}
                            >
                                ЗАКАЗАТЬ
                            </Button>
                        </Stack>
                    </Card.Body>
                </Card>
            }
            <AboutOrder 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}