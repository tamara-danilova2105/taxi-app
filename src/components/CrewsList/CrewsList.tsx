import { Button, Card, Stack } from 'react-bootstrap';
import { getCrews } from '../../redux/crewsSlice';
import { useAppSelector } from '../../redux/hooks';
import styles from './CrewsList.module.scss';
import { getCoordinates } from '../../redux/coordinatesSlice';

export const CrewsList = () => {

    const crews = useAppSelector(getCrews);
    const coordinates = useAppSelector(getCoordinates);

    const deg2rad = (deg: number): number => {
        return deg * (Math.PI / 180);
    }

    const getDistance = (lat: number, lon: number): number => {
        const R = 6371; // Радиус земли в км
        const dLat = deg2rad(coordinates[0] - lat);
        const dLon = deg2rad(coordinates[1] - lon);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat)) * Math.cos(deg2rad(coordinates[0])) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c * 1000; // Расстояние в м
        const distanceRound = Math.round(distance / 100) * 100
        return distanceRound;
    }

    const updateCrews = crews.map(crew => ({
        ...crew,
        distance: getDistance(crew.lat, crew.lon)
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
