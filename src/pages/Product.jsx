import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import CatalogAside from '../components/layout/CatalogAside';
import './Product.css';

const Product = ({items, item}) => {
    const currentItem = items[item];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="block">
                        <h3 className="block__header">{currentItem.title}</h3>
                        <div className="d-flex flex-wrap product-wrapper">
                            <img
                                src={currentItem.img}
                                alt={currentItem.title}
                                title={currentItem.title}
                                className="product-img"
                            />
                            <div className="flex-shrink-2 product-description">
                                <h5>{currentItem.title}</h5>
                                {/* <p> */}
                                <Form.Text className="text-muted my-3">
                                    Купить оптом c доставкой по РФ и ближнему
                                    зарубежью.
                                    <br />
                                    Цены уточняйте у менеджеров.
                                </Form.Text>
                                {/* </p> */}
                                <div>
                                    {currentItem.options && (
                                        <Form>
                                            {currentItem.options.map((itm) => (
                                                <Form.Group
                                                    controlId="exampleForm.SelectCustomSizeSm"
                                                    key={itm.name}
                                                >
                                                    <Form.Label>
                                                        {itm.name}
                                                    </Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        size="sm"
                                                        custom
                                                    >
                                                        {itm.values.map(
                                                            (value, i) => (
                                                                <option key={i}>
                                                                    {value}
                                                                </option>
                                                            )
                                                        )}
                                                    </Form.Control>
                                                </Form.Group>
                                            ))}
                                            <Form.Text className="text-muted text_main-color-medium">
                                                Не нашли нужных размеров?
                                            </Form.Text>
                                            <Form.Text className="text-muted col-10 p-0">
                                                Оставте заказ и укажите
                                                необходимые размеры и параметры
                                                в комментарии к заказу.
                                            </Form.Text>
                                            <Button
                                                className="mt-3 px-4"
                                                variant="primary"
                                                onClick={handleShow}
                                            >
                                                Заказать
                                            </Button>

                                            <Modal
                                                show={show}
                                                onHide={handleClose}
                                            >
                                                <Modal.Header closeButton>
                                                    <Modal.Title>
                                                        Оформление заказа
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form>
                                                        <div className="text-primary mb-4">
                                                            {currentItem.title}
                                                        </div>
                                                        <Form.Group controlId="formBasicName">
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Имя*"
                                                                required
                                                            />
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
                                                        <Form.Group
                                                            controlId="formBasicComment"
                                                            className="mt-4"
                                                        >
                                                            <Form.Control
                                                                as="textarea"
                                                                rows="3"
                                                                placeholder="Комментарий"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Text className="text-muted">
                                                                * Поля
                                                                помеченные
                                                                звездочкой
                                                                обязательные для
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
                                        </Form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Product;
