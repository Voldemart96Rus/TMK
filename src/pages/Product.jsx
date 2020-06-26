import React from 'react';
import {Form} from 'react-bootstrap';

import CatalogAside from '../components/layout/CatalogAside';

import './Product.css';

const Product = ({items, item}) => {
    const currentItem = items[item];
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
                                <p>
                                    Купить оптом c доставкой по РФ и ближнему
                                    зарубежью. Цены уточняйте у менеджеров.
                                </p>
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
