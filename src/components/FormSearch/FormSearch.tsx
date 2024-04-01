import Form from 'react-bootstrap/Form';
import styles from './FormSearch.module.css'
import { useAppDispatch } from '../../redux/hooks';
import { setSearch } from '../../redux/searchSlice';
import { ChangeEvent } from 'react';
import useDebounce from '../../hooks/useDebounce/useDebounce';

export const FormSearch = () => {
    const dispatch = useAppDispatch();

    const handleOnChange = useDebounce((e: ChangeEvent<HTMLInputElement>): void => {
        dispatch(setSearch(e.target.value));
    }, 500);

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
                    onChange={handleOnChange}
                />
            </Form.Group>
        </Form>
    )
}