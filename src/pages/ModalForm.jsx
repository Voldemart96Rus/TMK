import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalForm = ({show, handleClose, product}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Оформление заказа</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="text-primary mb-4">{product.title}</div>
                    <Form.Group controlId="formBasicName">
                        <Form.Control type="text" placeholder="Имя*" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="E-mail*"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Control
                            type="tel"
                            placeholder="Телефон*"
                            // pattern="\+7 \d{3} \d{3}-\d{2}-\d{2}"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicComment" className="mt-4">
                        <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Комментарий"
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
