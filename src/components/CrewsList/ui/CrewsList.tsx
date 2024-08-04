import { Alert, Button, Card, Stack } from 'react-bootstrap';
import { getCrews, setOrderCrew } from '../../../redux/crewsSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCoordinates } from '../../../redux/coordinatesSlice';
import { getDistance } from '../helpers/helpers';
import styles from './CrewsList.module.scss';
import { useEffect, useMemo } from 'react';
import { Crews } from '../../../types/types';

export const CrewsList = () => {
    const crews = useAppSelector(getCrews);
    const coordinates = useAppSelector(getCoordinates);
    const dispatch = useAppDispatch();   

    const updateCrews = crews.map(crew => ({
        ...crew,
        distance: getDistance({
            lat1: crew.lat,
            lon1: crew.lon,
            lat2: coordinates[0],
            lon2: coordinates[1]
        })
    }));

    const sortedCrews = useMemo(() => {
        return updateCrews.sort((a, b) => a.distance - b.distance);
    }, [updateCrews]);

    useEffect(() => {
        if (sortedCrews.length > 0) {
            dispatch(setOrderCrew(sortedCrews[0]));
        }
    }, [sortedCrews, dispatch]);

    const handleOrder = (crew: Crews) => {
        dispatch(setOrderCrew(crew));
    };

    if (!updateCrews.length || !coordinates.length) {
        return (
            <Alert variant='warning'>
                Свободных экипажей нет
            </Alert>
        );
    };

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
                            <Button 
                                variant="success"
                                onClick={() => handleOrder(crew)}
                            >
                                выбрать
                            </Button>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    );
};
