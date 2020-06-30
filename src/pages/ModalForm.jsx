import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalForm = ({show, handleClose, product}) => {
    const initialState = {
        name: '',
        email: '',
        tel: '',
        comment: '',
    };

    const [state, setState] = useState(initialState);

    const onChange = (e) =>
        setState({...state, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();

        fetch('/mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        })
            .then(() => {
                alert('Заказ отправлен');
            })
            .catch((e) => {
                console.error(e);
                alert('Возникла ошибка. Свяжитесь с нами по номеру XXXX');
            });

        setState(initialState);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Оформление заказа</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <div className="text-primary mb-4">{product.title}</div>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            placeholder="Имя*"
                            value={state.name}
                            onChange={onChange}
                            name="name"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="E-mail*"
                            value={state.email}
                            onChange={onChange}
                            name="email"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Control
                            type="tel"
                            placeholder="Телефон*"
                            // pattern="\+7 \d{3} \d{3}-\d{2}-\d{2}"
                            value={state.tel}
                            onChange={onChange}
                            name="tel"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicComment" className="mt-4">
                        <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Комментарий"
                            value={state.comment}
                            name="comment"
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Text className="text-muted">
                            * Поля помеченные звездочкой обязательные для
                            заполнения
                        </Form.Text>
                    </Form.Group>
                    <Button
                        className="order-from__submit-button"
                        variant="primary"
                        type="submit"
                    >
                        Отправить
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalForm;
