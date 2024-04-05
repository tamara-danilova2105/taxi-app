import { Button, Card, Stack } from 'react-bootstrap';
import { getCrews } from '../../redux/crewsSlice';
import { useAppSelector } from '../../redux/hooks';
import { getCoordinates } from '../../redux/coordinatesSlice';
import { getDistance } from './helpers/helpers';
import styles from './CrewsList.module.scss';

export const CrewsList = () => {

    const crews = useAppSelector(getCrews);
    const coordinates = useAppSelector(getCoordinates);   

    const updateCrews = crews.map(crew => ({
        ...crew,
        distance: getDistance({
            lat1: crew.lat,
            lon1: crew.lon,
            lat2: coordinates[0],
            lon2: coordinates[1]
        })
    }));

    const sortedCrews = updateCrews.sort((a, b) => a.distance - b.distance);

    return (
        <div className={styles.main}>
            {
                sortedCrews.map(crew =>
                    <Card key={crew.crew_id}>
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
