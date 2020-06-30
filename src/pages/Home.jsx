import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import CatalogAside from '../components/layout/CatalogAside';
import CompanyDescription from '../components/CompanyDescription';

function Home({contacts}) {
    return (
        <section className="container-lg content about">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="about">
                        <h3 className="block__header">О компании</h3>
                        <Carousel>
                            <Carousel.Item>
                                <picture>
                                    <source
                                        media="(max-width: 767px)"
                                        srcset="/img/carousel-1-mobile.jpg"
                                    />
                                    <img
                                        className="d-block w-100 carousel__image carousel__image_sm"
                                        src="/img/carousel-1.png"
                                        alt=""
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-2.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-3.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-4.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-5.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-6.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel-7.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/bg.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/tmk-prod-lg.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/plant.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                        </Carousel>
                        <CompanyDescription contacts={contacts} />
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Home;
