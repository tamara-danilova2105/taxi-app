import Form from 'react-bootstrap/Form';
import styles from './FormSearch.module.css'
import { useAppDispatch } from '../../redux/hooks';
import { setSearch } from '../../redux/searchSlice';
import { ChangeEvent } from 'react';

export const FormSearch = () => {
    const dispatch = useAppDispatch();

    const hadleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        dispatch(setSearch(e.target.value))
    };

    return (
        <Form >
            <Form.Group className="d-flex">
                <Form.Label
                    className={styles.label}
                >
                    От куда
                </Form.Label>
                <Form.Control
                    type='text'
                    placeholder="Введите адрес..."
                    onChange={hadleSearch}
                />
            </Form.Group>
        </Form>
    )
}