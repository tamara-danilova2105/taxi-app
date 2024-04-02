import { Button, Card, Stack } from 'react-bootstrap';
import { getCrews } from '../../redux/crewsSlice';
import { useAppSelector } from '../../redux/hooks';
import styles from './CrewsList.module.scss';

export const CrewsList = () => {

    const crews = useAppSelector(getCrews);

    return (
        <div className={styles.main}>
            {
                crews.map(crew =>
                    <Card>
                        <Card.Body>
                            <Card.Title>{crew.car_mark} {crew.car_model}</Card.Title>
                            <Stack
                                direction="horizontal"
                                className='align-start justify-between'
                            >
                                <Card.Text>{crew.car_color}</Card.Text>
                                <Card.Text>{crew.distance}м </Card.Text>
                            </Stack>
                            <Button variant="success">выбрать</Button>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    );
};
