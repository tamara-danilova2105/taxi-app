import Form from 'react-bootstrap/Form';

export const FormSearch = () => {
    return (
        <Form >
            <Form.Group className="d-flex">
                <Form.Label
                    className='label'
                >
                    От куда
                </Form.Label>
                <Form.Control
                    type='text'
                    placeholder="Введите адрес..."
                />
            </Form.Group>
        </Form>
    )
}