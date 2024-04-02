import Form from 'react-bootstrap/Form';
import styles from './FormSearch.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getSearchValue, setSearch } from '../../redux/searchSlice';
import { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce/useDebounce';

export const FormSearch = () => {
    const dispatch = useAppDispatch();
    const address = useAppSelector(getSearchValue);
    const [value, setValue] = useState(address);

    useEffect(() => {
        setValue(address);
    }, [address]);
    

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        saveAdress(e.target.value);
    }

    const saveAdress = useDebounce((value: string): void => {
        dispatch(setSearch(value));
    }, 1500);

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
                    value={value}
                    onChange={handleOnChange}
                />
            </Form.Group>
        </Form>
    )
}