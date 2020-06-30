import React from 'react';
import Card from 'react-bootstrap/Card';

const CompanyDescription = () => {
    return (
        <article className="container">
            <div className="row">
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/favicon.svg"
                        className="company-description__image p-2 px-3"
                    />
                    <Card.Body>
                        <Card.Title>О нас</Card.Title>
                        <Card.Text>
                            ППУТМК специализируется на производстве и поставке{' '}
                            <span className="text_main-color">
                                труб ППУ и фасонных изделий
                            </span>{' '}
                            в защитной оболочке.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/factory-light.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Производство</Card.Title>
                        <Card.Text>
                            Производственные площади организации находятся в{' '}
                            <span className="text_main-color">
                                Свердловской области.
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/buildings.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Офис</Card.Title>
                        <Card.Text>
                            Главный офис находиться в городе{' '}
                            <span className="text_main-color">
                                Екатеринбург.
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/certificate.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Качество</Card.Title>
                        <Card.Text>
                            Вся продукция сертифицирована и соответствует{' '}
                            <span className="text_main-color">
                                международным стандартам.
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/hand.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Эффективность</Card.Title>
                        <Card.Text>
                            Высококачественные трубы ППУ в полиэтиленовой и
                            оцинкованной оболочке помогают{' '}
                            <span className="text_main-color">
                                сократить теплопотери до 30%.
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/down.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Скидки и бонусы</Card.Title>
                        <Card.Text>
                            Существует гибкая система{' '}
                            <span className="text_main-color">
                                скидок, бонусов
                            </span>
                            , условий оплаты.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/wheels-truck.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Доставка</Card.Title>
                        <Card.Text>
                            Мы готовы поставить вам все элементы необходимые для
                            монтажа{' '}
                            <span className="text_main-color">теплотрасс.</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/pipes.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Товары</Card.Title>
                        <Card.Text>
                            Мы готовы поставить вам{' '}
                            <span className="text_main-color">
                                трубы ППУ и другие элементы
                            </span>{' '}
                            для монтажа теплотрасс на самых выгодных условиях.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/increase.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Выгодные условия</Card.Title>
                        <Card.Text>
                            Мы работаем на{' '}
                            <span className="text_main-color">
                                взаимовыгодных
                            </span>{' '}
                            условиях.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="company-description__contacts my-3">
                <a
                    href="tel:"
                    className="btn btn-primary company-description__contact mb-3"
                >
                    <img src="/img/phone.svg" alt="" className="icon pr-3" />
                    Позвоните нам
                </a>
                <a
                    href="mailto:"
                    className="btn btn-primary company-description__contact "
                >
                    <img src="/img/text.svg" alt="" className="icon pr-3" />
                    Отправьте вашу заявку
                </a>
            </div>
        </article>
    );
};

export default CompanyDescription;
